import React, { useCallback, useState } from 'react';
import { Pet } from '../../types/SchemaTypes';
import { GetStaticProps } from 'next';
import { fetchAllByType, fetchAllByTypeWithFilter } from '../api/GroqHelper';
import Header from '../../components/atoms/Header';
import Card from '../../components/atoms/Card';
import styled from 'styled-components';
import TextRow from '../../components/atoms/TextRow';
import { Field, FieldProps, Form, Formik } from 'formik';
import Button from '../../components/atoms/Button';
import flexhelper from '../../styles/flexhelper.module.css';
import FormTextInput from '../../components/atoms/StyledFormTextInput';

interface AllPetsProps {
	pets: Pet[];
}

export const getStaticProps: GetStaticProps = async () => {
	const pets: Pet[] = await fetchAllByType<Pet[]>('pet');
	return {
		props: {
			pets,
		},
	};
};

interface InitialValues {
	petSearch: string;
	temp: string;
}

const AllPets: React.FC<AllPetsProps> = ({ pets: petProp }) => {
	const [pets, setPets] = useState(petProp);
	const [allowReset, setAllowReset] = useState(false);
	const initialValues: InitialValues = {
		petSearch: '',
		temp: '',
	};
	const handleReset = useCallback(async (reset: () => void) => {
		fetchAllByType<Pet[]>('pet')
			.then(response => {
				setPets(response);
				setAllowReset(false);
				reset();
			})
			.catch(err => console.log(err));
	}, []);

	const handleSubmit = useCallback(async (values: InitialValues) => {
		fetchAllByTypeWithFilter<Pet[]>(
			'pet',
			'[name, race, weight]',
			values.petSearch
		)
			.then(response => {
				setPets(response);
				setAllowReset(true);
			})
			.catch(err => console.log(err));
	}, []);
	return (
		<>
			<Header headerText="Alle kjæledyr" />
			<AllpetsWrapper className={flexhelper.flexcolumndirection}>
				<Formik initialValues={initialValues} onSubmit={handleSubmit}>
					{({ handleSubmit, resetForm }) => (
						<Form>
							<Field
								id="petSearch"
								name="petSearch"
								render={(props: FieldProps) => (
									<FormTextInput
										placeholder="Skriv inn søkeorder"
										type="text"
										{...props}
									/>
								)}
							/>
							<ButtonContainer>
								<>
									<Button callback={handleSubmit} text="Søk" />
									{allowReset && (
										<Button
											callback={() => handleReset(resetForm)}
											text="Tilbakestill søk"
										/>
									)}
								</>
							</ButtonContainer>
						</Form>
					)}
				</Formik>
				{pets.length > 0 && (
					<div>
						{pets.map(pet => (
							<Card key={pet._id}>
								<CardContent>
									<TextRow textName="Navn" value={pet.name} />
									<TextRow textName="Rase" value={pet.race} />
									<TextRow textName="Vekt" value={pet.weight} />
								</CardContent>
							</Card>
						))}
					</div>
				)}
				{pets.length === 0 && <p>No pets to show</p>}
				{pets.length === 0 && (
					<div>
						<div>¯\_(ツ)_/¯</div>
						<p>
							Your data will show up here when you`ve configured everything
							correctly
						</p>
					</div>
				)}
			</AllpetsWrapper>
		</>
	);
};

export default AllPets;

const AllpetsWrapper = styled.div`
	padding-top: 1em;
`;

const CardContent = styled.div`
	padding: 1em;
	display: inherit;
	flex-direction: column;
`;

const ButtonContainer = styled.div`
	display: flex;
	margin-top: 1em;
	column-gap: 1em;
`;
