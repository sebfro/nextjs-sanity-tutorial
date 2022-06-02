import React, { useCallback } from "react";
import styled from "styled-components";
import StyledButton from "../atoms/Common/StyledButton";

interface OverviewLayoutProps {
    username: string;
}
const OverviewLayout:React.FC<OverviewLayoutProps> = ({
	username
}) => {
	const handleOnClick = useCallback(
		() => {
			console.log("Create");
		},
		[],
	);

	const handleRoutingToInsepction = useCallback(
		() => {
			console.log("I be routing");
		},
		[],
	);

	const handleLogout = useCallback(
		() => {
			console.log("Goodbye my friend");
		},
		[],
	);
    
	return (
		<Layout>
			<TopBar className="flexaligncenter" >
				<HeadingItem className="flexaligncenter">
					<StyledSvg src="/heart.png" alt="logo" />
					{username}
				</HeadingItem>
				<HeadingItem className="flexaligncenter pointeronhover" onClick={handleLogout} >
					<StyledSvg src="/piggy-bank.png" alt="logo" />
                    Logg ut
				</HeadingItem>
			</TopBar>
			<Content>
				<Heading className="flexaligncenter">
					<LogoAndTitle className="flexaligncenter">
						<img src="/piggy-bank.png" alt="logo" />
						<p>TS-inspeksjoner</p>
					</LogoAndTitle>
					<StyledButton text="Opprett TS-inspeksjon" callback={handleOnClick} />
				</Heading>
			</Content>
		</Layout>
	);
};

export default OverviewLayout;

const Layout = styled.div`
    background-color: #F5F5F5;
    .flexaligncenter {
        display: flex;
        align-items: center;
    }
    .pointeronhover {
        :hover {
            cursor: pointer;
        }
    }
`;

const TopBar = styled.div`
padding: 0.2em 0.8em;
background-color: #353E43;
justify-content: space-between;
`;

const Content = styled.div`
    width: 90%;
    margin: auto;
`;

const Heading = styled.div`
    margin: 2em 0;
    justify-content: space-between;
`;

const HeadingItem = styled.div`
    display: flex;
    column-gap: 0.4em;
`;

const StyledSvg = styled.img`
    width: 1em;
    display: flex;
    align-items: center;
    column-gap: 0.4em;
`;

const LogoAndTitle = styled.div`
    display: flex;
    column-gap: 0.6em;
    p {
        font-size: xx-large;
        color: black;
    }
    img {
        width: 32px;
        height: 32px;
    }
`;