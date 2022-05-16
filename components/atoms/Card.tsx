import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors.module.css";

interface CardProps {
    children: JSX.Element;
}

const Card: React.FC<CardProps> = ({children}) => {
	return (
		<Row className={`${colors.lightgrey} borderstyling`} >{children}</Row>
	);
};

export default Card;

export const Row = styled.div`
    display: flex;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 0 1em;
    margin-bottom: 1em;
`;
