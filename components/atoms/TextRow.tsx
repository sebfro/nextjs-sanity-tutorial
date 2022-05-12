import React from "react";
import styled from "styled-components";

interface TextRowProps {
    textName: string;
    textValue: string;
}
const TextRow: React.FC<TextRowProps> = ({textName, textValue}) => {
	return (
		<Row>{textName}: {textValue}</Row>
	);
};

export default TextRow;

const Row = styled.div`
    display: flex;
    margin-bottom: 0.5em;
`;