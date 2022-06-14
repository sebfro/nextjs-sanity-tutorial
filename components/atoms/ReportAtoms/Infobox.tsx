import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Label } from '../Common/Label';

interface InfoboxProps {
	label: string;
	description: string;
	children?: ReactElement;
}

const Infobox: React.FC<InfoboxProps> = ({ label, description, children }) => {
	return (
		<div>
			<LabelWrapper>
				<Label>{label}</Label>
				{children && children}
			</LabelWrapper>
			<Description>{description}</Description>
		</div>
	);
};

export default Infobox;

const LabelWrapper = styled.div`
	display: flex;
	column-gap: 1em;
	align-items: center;
`;

const Description = styled.p`
	margin: 0;
`;
