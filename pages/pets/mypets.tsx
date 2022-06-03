import { GetStaticProps } from 'next';
import React, { useCallback, useState } from 'react';
import Button from '../../components/atoms/Button';
import Header from '../../components/atoms/Header';
import { Pet, User } from '../../types/SchemaTypes';
import { fetchAllByType } from '../api/GroqHelper';
import flexhelper from '../../styles/flexhelper.module.css';
import { fetchAllByTypeAndReference } from './../api/GroqHelper';
import PetCard from '../../components/atoms/PetCard';

const userType = 'user';
interface HomMypetsProps {
	users: User[];
}

export const getStaticProps: GetStaticProps = async () => {
	const users: User[] = await fetchAllByType<User[]>(userType);
	return {
		props: {
			users,
		},
	};
};

const Mypets: React.FC<HomMypetsProps> = ({ users }) => {
	const [pets, setPets] = useState<Pet[]>([]);
	const handleUserClick = useCallback(async (id: string) => {
		console.log(id);
		await fetchAllByTypeAndReference<Pet[]>('pet', userType, id)
			.then(response => {
				console.log(response);
				setPets(response);
			})
			.catch(err => console.log(err));
	}, []);

	return (
		<>
			<Header headerText="Velg bruker å se på" />
			<div className={flexhelper.flexcolumndirection}>
				<div className={flexhelper.flexrow}>
					{users.map(user => (
						<Button
							key={user._id}
							callback={() => handleUserClick(user._id)}
							text={user.name}
						/>
					))}
				</div>
				<PetCard pets={pets} />
			</div>
		</>
	);
};

export default Mypets;
