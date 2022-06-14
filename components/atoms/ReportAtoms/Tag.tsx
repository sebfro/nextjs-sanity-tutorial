import React from 'react';
import styled, { css } from 'styled-components';
import { StyledSvg } from '../StyledComponents/StyledSvg';

export interface TagsProps {
	text: string;
	type?: 'error' | 'standard';
	iconPath?: string;
}

const Tag: React.FC<TagsProps> = ({ text, type = 'standard', iconPath }) => {
	return (
		<Container type={type}>
			{iconPath && (
				<CustomStyledSvg className="cursorhover" src={iconPath} alt="logo" />
			)}
			<p>{text}</p>
		</Container>
	);
};

export default Tag;

const Container = styled.div<{ type: 'error' | 'standard' }>`
	width: fit-content;
	padding: 0.3em 0.5em;
	display: flex;
	column-gap: 0.3em;
	${({ type }) => {
		switch (type) {
			case 'error':
				return css`
					background-color: #fedfe1;
				`;
			default:
				return css`
					background-color: #e6f1f5;
				`;
		}
	}};
	p {
		margin: 0;
		font-size: 14px;
	}
	img {
		height: 1em;
	}
`;

const CustomStyledSvg = styled(StyledSvg)`
	width: 1em;
`;
