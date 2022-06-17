import React, { ReactElement } from 'react';
import styled from 'styled-components';
import ReportsPage from '../../pages/tsinsp/reportspage';
import TopBar from '../atoms/TopBar';

interface OverviewLayoutProps {
	username: string;
	children?: ReactElement;
}

const OverviewLayout: React.FC<OverviewLayoutProps> = ({ username }) => {
	return (
		<Layout>
			<TopBar username={username} />
			<Content>
				<Heading className="flexaligncenter">
					<LogoAndTitle className="flexaligncenter">
						<img src="/piggy-bank.png" alt="logo" />
						<p>TS-inspeksjoner</p>
					</LogoAndTitle>
				</Heading>
				<ReportsPage />
			</Content>
		</Layout>
	);
};

export default OverviewLayout;

const Layout = styled.div`
	background-color: #f5f5f5;
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

const Content = styled.div`
	width: 90%;
	margin: auto;
`;

const Heading = styled.div`
	margin: 2em 0;
	justify-content: space-between;
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
