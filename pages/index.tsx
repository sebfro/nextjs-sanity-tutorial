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
import ChangePosition from './../components/molecules/ChangePosition';
import styled from 'styled-components';

const Home: React.FC = () => {
	const router = useRouter();
	const goToPassedPage = useCallback(
		(path: string) => {
			router.push({ pathname: path });
		},
		[router]
	);
	const [isOpen, setIsOpen] = useState(false);
	const [isPositionModalOpen, setIsPositionModalOpen] = useState(false);
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
				<Button
					text="Åpne rapport"
					callback={() => goToPassedPage(VeivesenRoutes.report)}
				/>
				<Button
					text="Åpne rapport oversikt"
					callback={() => goToPassedPage(VeivesenRoutes.finishedreport)}
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
				<Button
					text="Åpne posisjon modal"
					callback={() => setIsPositionModalOpen(!isOpen)}
				/>
				<Button
					text="Gå til test område"
					callback={() => goToPassedPage(VeivesenRoutes.testarea)}
				/>
				<StyledModal
					isOpen={isPositionModalOpen}
					handleClose={() => setIsPositionModalOpen(false)}
					handleConfirm={() => setIsPositionModalOpen(false)}
					headerText="Endre posisjon"
					includeBtnRow={false}
				>
					<ChangePosition />
				</StyledModal>
			</main>
		</>
	);
};

export default Home;

const StyledModal = styled(Modal)`
	padding: 2.8em 2em 3em;
	width: fit-content;
`;
