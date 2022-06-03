import React from 'react';
import styled from 'styled-components';

interface TextRowProps {
	textName: string;
	value?: string | number | null;
}

const notAvailable = 'Utilgjengelig';

const TextRow: React.FC<TextRowProps> = ({ textName, value: textValue }) => {
	return (
		<Row>
			{textName}: {textValue || notAvailable}
		</Row>
	);
};

export default TextRow;

const Row = styled.div`
	display: flex;
	margin-bottom: 0.5em;
`;
