import React from 'react';
import styled from 'styled-components';
import utilStyles from '../../styles/utils.module.css';
import Button from './Button';
import { useRouter } from 'next/router';
import colors from '../../styles/colors.module.css';

interface HeaderProps {
	headerText: string;
	goHomeBtn?: boolean;
	goBackBtn?: boolean;
}
const Header: React.FC<HeaderProps> = ({
	headerText,
	goBackBtn = true,
	goHomeBtn = true,
}) => {
	const router = useRouter();
	return (
		<HeaderRow className={`${colors.lightgrey} borderstyling`}>
			<h2 className={utilStyles.headingLg}>{headerText}</h2>
			<BtnContainer>
				{goHomeBtn && <Button callback={() => router.push('/')} text="Home" />}
				{goBackBtn && (
					<Button callback={() => router.back()} text="Gå tilbake" />
				)}
			</BtnContainer>
		</HeaderRow>
	);
};

export default Header;

const BtnContainer = styled.div`
	display: inherit;
	justify-content: flex-end;
	column-gap: 1em;
`;

const HeaderRow = styled.header`
	display: flex;
	justify-content: space-between;
	margin-bottom: 1em;
	box-shadow: 0 4px 8px 0 #0d1117;
	/* border-radius: 5px;
	border: 2px solid #212831; */
	padding: 0.5em;
	align-items: center;
`;
