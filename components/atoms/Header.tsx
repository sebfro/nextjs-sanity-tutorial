import React from "react";
import styled from "styled-components";
import utilStyles from "../../styles/utils.module.css";
import Button from "./Button";
import { useRouter } from "next/router";


interface HeaderProps {
    headerText: string;
    goBackBtn?: boolean;
}
const Header: React.FC<HeaderProps> = ({headerText, goBackBtn = true}) => {
	const router = useRouter();
	return (
		<HeaderRow>
			<h2 className={utilStyles.headingLg} >{headerText}</h2>
			{goBackBtn && <Button callback={() => router.back()} text="Gå tilbake" />}
		</HeaderRow>
	);
};

export default Header;

const HeaderRow = styled.header`
	display: flex;
	justify-content: space-between
`;
