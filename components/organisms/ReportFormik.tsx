import { Formik, FormikProps } from 'formik';
import React, { ReactElement, useCallback, useState } from 'react';
import * as Yup from 'yup';

export interface InitialValues {
	description: string;
	suggestion: string;
	handbookReference: string;
	risk: {
		consequence: number;
		frequency: number;
	};
	immediateAction: boolean;
	images: File[];
}

export interface ReportProps {
	// reportNr: number;
	// title: string;
	// discoveryType: string;
	// discovery: string;
	risk: {
		consequence: number;
		frequency: number;
	};
	children: ReactElement;
}

const ReportFormik: React.FC<ReportProps> = ({ risk, children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const initialValues: InitialValues = {
		description: '',
		suggestion: '',
		handbookReference: '',
		risk: risk,
		immediateAction: false,
		images: [],
	};

	const handleSubmit = useCallback(async (values: InitialValues) => {
		console.log(values);
		console.log('--------');
	}, []);

	const handleEditClick = useCallback(() => {
		console.log('How edit work?');
		setIsModalOpen(true);
	}, []);

	const handleCancelClick = useCallback(() => {
		console.log('I cancel');
	}, []);

	const SignupSchema = Yup.object().shape({
		description: Yup.string().required('Required'),
		suggestion: Yup.string().required('Required'),
		handbookReference: Yup.string().required('Required'),
	});
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={SignupSchema}
		>
			{(props: FormikProps<InitialValues>) => <>{children}</>}
		</Formik>
	);
};

export default ReportFormik;
