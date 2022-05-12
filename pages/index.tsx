import React, { useCallback } from "react";
import { Pet } from "../types/SchemaTypes";
import { GetStaticProps } from "next";
import { fetchAllByType } from "./api/client";
import Header from "../components/atoms/Header";
import { PetRoutes, WorkoutRoutes } from "../Constants/routes";
import { useRouter } from "next/router";
import Button from "../components/atoms/Button";
import styled from "styled-components";
import StyledButton from "../components/atoms/Common/StyledButton";

interface HomeProps {
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

const text =
  "Your data will show up here when you've configured everything correctly";

const Home: React.FC<HomeProps> = ({ pets }) => {
	const router = useRouter();
	const gotToMyPets = useCallback((id: string) => {
		router.push({ pathname: PetRoutes.allPets, query: { id } });
	}, []);
	const goToPassedPage = useCallback((path: string) => {
		router.push({ pathname: path });
	}, []);
	return (
		<>
			<Header headerText="Hovedside" goBackBtn={false} />
			<CustomMain>
				<StyledButton>
					<Button text="Se alle kjæledyr" callback={() => goToPassedPage(PetRoutes.allPets)} />
				</StyledButton>
				<StyledButton>
					<Button text="Se mine kjæledyr" callback={() => goToPassedPage(PetRoutes.mypets)} />
				</StyledButton>
				<StyledButton>

					<Button text="Gå til trening oversikt" callback={() => goToPassedPage(WorkoutRoutes.workoutWeeksOverview)} />
				</StyledButton>
			</CustomMain>
		</>
	);
};

export default Home;

const CustomMain = styled.main`
	display: flex;
`;