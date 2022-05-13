import React, { useCallback, useState } from "react";
import { Pet } from "../../types/SchemaTypes";
import { GetStaticProps } from "next";
import { fetchAllByType, fetchAllByTypeWithFilter } from "../api/client";
import Header from "../../components/atoms/Header";
import Card from "../../components/atoms/Card";
import styled from "styled-components";
import TextRow from "../../components/atoms/TextRow";
import { Field, Form, Formik } from "formik";
import Button from "../../components/atoms/Button";
import flexhelper from "../../styles/flexhelper.module.css";

interface AllPetsProps {
    pets: Pet[];
  }
  
export const getStaticProps: GetStaticProps = async () => {
	const pets: Pet[] = await fetchAllByType<Pet[]>("pet");
	return {
		props: {
			pets,
		},
	};
};

const text = "Your data will show up here when you've configured everything correctly";

interface InitialValues {
    petSearch: string;
} 

const AllPets: React.FC<AllPetsProps> = ({pets: petProp}) => {
	const [pets, setPets] = useState(petProp);
	const [allowReset, setAllowReset] = useState(false);
	const initialValues: InitialValues = {
		petSearch: ""
	};
	const handleReset = useCallback(
		async (reset: () => void) => {
			fetchAllByType<Pet[]>("pet")
				.then(response => {
					setPets(response);
					setAllowReset(false);
					reset();
				})
				.catch(err => console.log(err));
		},
		[],
	);
	
	const handleSubmit = useCallback(
		async (values: InitialValues) => {
			fetchAllByTypeWithFilter<Pet[]>("pet","[name, race, weight]", values.petSearch)
				.then(response => {
					setPets(response);
					setAllowReset(true);
				})
				.catch(err => console.log(err));
		},
		[],
	);
	return (
		<>
			<Header headerText="Alle kjæledyr" />
			<AllpetsWrapper className={flexhelper.flexcolumndirection} >
				<Formik initialValues={initialValues} onSubmit={handleSubmit} >
					{({ handleSubmit, resetForm }) => (
						<Form>
							<Field id="petSearch" name="petSearch" required>

							</Field>
							{/* <input type="text" id="name" name="petSearch" 
								required onChange={handleChange} value={values.petSearch}
								minLength={4} maxLength={8} size={10}/> */}
							<ButtonContainer>
								<ButtonWrapper>
									<Button callback={handleSubmit} text="Søk" />
								</ButtonWrapper>
								{ allowReset &&
							<ButtonWrapper>
								<Button callback={() => handleReset(resetForm)} text="Tilbakestill søk" />
							</ButtonWrapper>}
							</ButtonContainer>
						</Form>
					)}
				</Formik>
				{pets.length > 0 && (
					<div>
						{pets.map((pet) => (
							<Card key={pet._id}>
								<CardContent>
									<TextRow textName="Navn" textValue={pet.name} />
									<TextRow textName="Rase" textValue={pet.race} />
									<TextRow textName="Vekt" textValue={pet.weight} />
								</CardContent>
							</Card>
						))}
					</div>
				)}
				{pets.length === 0 && <p>No pets to show</p>}
				{pets.length === 0 && (
					<div>
						<div>¯\_(ツ)_/¯</div>
						<p>{text}</p>
					</div>
				)}
			</AllpetsWrapper>
		</>
	);
};

export default AllPets;

const AllpetsWrapper = styled.div`
	padding: 1em;
`;

const CardContent = styled.div`
    padding: 1em;
    display: inherit;
    flex-direction: column;
`;

const ButtonWrapper = styled.div`
	margin-top: 0.5em;
	margin-right: 0.5em;
`;

const ButtonContainer = styled.div`
	display: flex;
`;

const CustomMain = styled.div`
	flex-direction: column;
`;