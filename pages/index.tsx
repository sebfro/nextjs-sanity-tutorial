import React, { useCallback, useState } from 'react';
import Header from '../components/atoms/Header';
import {
	PetRoutes,
	TibberRoutes,
	VeivesenRoutes,
	WorkoutRoutes,
} from '../Constants/routes';
import { useRouter } from 'next/router';
import Button from '../components/atoms/Button';
import Modal from '../components/molecules/Modal';
import CreateTSInspectionForm from '../components/organisms/CreateTSInspectionForm';

const Home: React.FC = () => {
	const router = useRouter();
	const goToPassedPage = useCallback(
		(path: string) => {
			router.push({ pathname: path });
		},
		[router]
	);
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<Header headerText="Hovedside" goBackBtn={false} goHomeBtn={false} />
			<main>
				<Button
					text="Se alle kjæledyr"
					callback={() => goToPassedPage(PetRoutes.allPets)}
				/>
				<Button
					text="Se mine kjæledyr"
					callback={() => goToPassedPage(PetRoutes.mypets)}
				/>
				<Button
					text="Gå til trening oversikt"
					callback={() => goToPassedPage(WorkoutRoutes.workoutWeeksOverview)}
				/>
				<Button
					text="Gå til tibber oversikt"
					callback={() => goToPassedPage(TibberRoutes.tibberOverview)}
				/>
				<Button
					text="Gå til risikovurdering"
					callback={() => goToPassedPage(VeivesenRoutes.riskMatrix)}
				/>
				<Button
					text="Gå til Vegvesen layout"
					callback={() => goToPassedPage(VeivesenRoutes.overviewLayout)}
				/>
				<Button
					text="Gå til Vegvesen TSINSP form"
					callback={() => goToPassedPage(VeivesenRoutes.tsinspform)}
				/>
				<Button text="Åpne modal" callback={() => setIsOpen(!isOpen)} />
				<Modal
					isOpen={isOpen}
					handleClose={() => setIsOpen(false)}
					handleConfirm={() => setIsOpen(false)}
					headerText="Temp"
				>
					<CreateTSInspectionForm />
				</Modal>
			</main>
		</>
	);
};

export default Home;
