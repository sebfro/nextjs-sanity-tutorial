import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import styled from "styled-components";
import Button from "../../components/atoms/Button";
import StyledButton from "../../components/atoms/Common/StyledButton";
import Header from "../../components/atoms/Header";
import { WorkoutRoutes } from "../../Constants/routes";
import { WorkoutWeek } from "../../types/SchemaTypes";
import { apiUrl, fetchAllByType } from "../api/client";

export const getServerSideProps: GetStaticProps = async () => {
	let workoutWeeks: WorkoutWeek[] = await fetchAllByType("workoutweek");
	workoutWeeks = workoutWeeks.sort((a, b) => {
		if (a.weeknr < b.weeknr) return -1;
		if (a.weeknr > b.weeknr) return 1;
		return 0;
	});
	return {
		props: {
			workoutWeeks,
		},
	};
};

interface WorkoutsProps {
  workoutWeeks: WorkoutWeek[];
}

const WorkoutWeeks: React.FC<WorkoutsProps> = ({ workoutWeeks }) => {
	const router = useRouter();
	const goToWorkoutWeek = useCallback((id: string) => {
		router.push({ pathname: WorkoutRoutes.workoutweek, query: { id } });
	}, []);

	const handleAddWeek = useCallback(() => {
		const token = process.env.DB_PASS;
		console.log(token);
		const mutations = {
			mutations: [
				{
					create: {
						_type: "cms.document",
						title: "Uke 11",
					},
				},
			],
		};
		fetch(apiUrl, {
			method: "post",
			headers: {
				"Content-type": "application/json",
				Authorization: `Bearer ${token}`
			},
			body: JSON.stringify(mutations)
		})
			.then(res => res.json())
			.then(result => console.log(result))
			.catch(error => console.log(error));
		console.log("Add week");
	}, []);

	return (
		<>
			<Header headerText="Trenings Uker" />
			<WeekContainer>
				{workoutWeeks.map(({ week, _id }) => (
					<StyledButton key={_id}>
						<Button key={_id} callback={() => goToWorkoutWeek(_id)} text={week} />
					</StyledButton>
				))}
				<Button callback={handleAddWeek} text="+" />
			</WeekContainer>
		</>
	);
};

export default WorkoutWeeks;

const WeekContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
