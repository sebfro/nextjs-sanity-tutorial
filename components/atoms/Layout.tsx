import React from 'react';
import styled from 'styled-components';

interface LayoutProps {
	children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return <WrapperLayout>{children}</WrapperLayout>;
};

export default Layout;

const WrapperLayout = styled.div`
	/* width: 80%; */
	margin: auto;
	/* padding: 1em; */
`;
