import React from 'react';
import styled from 'styled-components';
import { Pet } from '../../types/SchemaTypes';
import Card from './OldCard';
import TextRow from './TextRow';

interface PetCardProps {
	pets: Pet[];
}

const PetCard: React.FC<PetCardProps> = ({ pets }) => {
	return (
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
	);
};

export default PetCard;

const CardContent = styled.div`
	padding: 1em;
	display: inherit;
	flex-direction: column;
`;
