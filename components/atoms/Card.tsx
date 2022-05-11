import React from "react";
import styled from "styled-components";

interface CardProps {
    children: JSX.Element;
}

const Card: React.FC<CardProps> = ({children}) => {
	return (
		<Row>{children}</Row>
	);
};

export default Card;

const Row = styled.div`
    display: flex;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 0 1em;
    margin-bottom: 1em;
`;
