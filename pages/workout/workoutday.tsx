import { GetServerSideProps } from 'next';
import { groq } from 'next-sanity';
import styled from 'styled-components';
import React, { useCallback } from 'react';
import { Workout } from '../../types/SchemaTypes';
import { client } from '../api/GroqHelper';
import WorkoutSetRow from '../../components/atoms/WorkoutSetRow';
import Header from '../../components/atoms/Header';
import utilStyles from '../../styles/utils.module.css';
import Button from '../../components/atoms/Button';
import flexhelper from '../../styles/flexhelper.module.css';

export const getServerSideProps: GetServerSideProps = async ({
	query: { id },
}) => {
	const response = await client.fetch(
		groq`*[_type=="workout" && references(*[_type=="workoutday" && _id == "${id}"]._id)]
		{
			_id,
			ovelse,
			workoutdeyref,
			sets
		}`
	);
	return { props: { workouts: response } };
};

interface WorkoutdayProps {
	workouts: Workout[];
}

const Workoutday: React.FC<WorkoutdayProps> = ({ workouts }) => {
	const handleAddWorkout = useCallback(() => {
		console.log('added');
	}, []);

	return (
		<>
			<Header headerText="Dagens økt" />
			<div className={flexhelper.flexcolumndirection}>
				{workouts.map(({ ovelse, sets, _id }) => (
					<Row key={_id}>
						<p className={utilStyles.headingMd}>{ovelse}</p>
						<WorkoutSetRow sets={sets} id={_id} />
					</Row>
				))}
				<Button callback={handleAddWorkout} text="+" />
			</div>
		</>
	);
};

export default Workoutday;

const Row = styled.div`
	display: grid;
`;
