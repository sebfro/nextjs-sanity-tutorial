import React from 'react';
import styled from 'styled-components';
import SvgGetter from './SVG/SvgGetter';

interface LinkButtonProps {
	text: string;
	link: string;
	className: string;
}
const LinkButton: React.FC<LinkButtonProps> = ({ link, text, className }) => {
	return (
		<Wrapper className={`${className} pointeronhover`}>
			<SvgGetter icon="CircleArrowLeft" />
			{/* <ClickableLink  >{text}</ClickableLink> */}
			<ClickableLink href={link}>{text}</ClickableLink>
		</Wrapper>
	);
};

export default LinkButton;

const ClickableLink = styled.a`
	color: black;
	text-decoration: underline;
`;
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	column-gap: 0.5em;
	img {
		transform: scaleX(-1);
		width: 5.5px;
		height: 9.5px;
	}
`;
