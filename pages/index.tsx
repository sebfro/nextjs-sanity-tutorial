import React, { useCallback } from "react";
import Header from "../components/atoms/Header";
import { PetRoutes, TibberRoutes, VeivesenRoutes, WorkoutRoutes } from "../Constants/routes";
import { useRouter } from "next/router";
import Button from "../components/atoms/Button";


const Home: React.FC = () => {
	const router = useRouter();
	const goToPassedPage = useCallback((path: string) => {
		router.push({ pathname: path });
	}, []);
	return (
		<>
			<Header headerText="Hovedside" goBackBtn={false} goHomeBtn={false} />
			<main>
				<Button text="Se alle kjæledyr" callback={() => goToPassedPage(PetRoutes.allPets)} />
				<Button text="Se mine kjæledyr" callback={() => goToPassedPage(PetRoutes.mypets)} />
				<Button text="Gå til trening oversikt" callback={() => goToPassedPage(WorkoutRoutes.workoutWeeksOverview)} />
				<Button text="Gå til tibber oversikt" callback={() => goToPassedPage(TibberRoutes.tibberOverview)} />
				<Button text="Gå til risikovurdering" callback={() => goToPassedPage(VeivesenRoutes.riskMatrix)} />
			</main>
		</>
	);
};

export default Home;
