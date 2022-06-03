import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import StyledButton from '../atoms/Common/StyledButton';

interface OverviewLayoutProps {
  username: string;
}

type Toggle = 'InProgress' | 'Completed';

const OverviewLayout: React.FC<OverviewLayoutProps> = ({ username }) => {
  const [selectedToggle, setSelectedToggle] = useState<Toggle>('InProgress');
  const handleOnClick = useCallback(() => {
    console.log('Create');
  }, []);

  // Tanken med denne er å håndtere koretene som vises. Hvis det er nødvendig.
  const handleRoutingToInsepction = useCallback(() => {
    console.log('I be routing');
  }, []);

  const handleLogout = useCallback(() => {
    console.log('Goodbye my friend');
  }, []);

  const handleToggle = useCallback((toggle: Toggle) => {
    setSelectedToggle(toggle);
  }, []);

  return (
    <Layout>
      <TopBar className="flexaligncenter">
        <HeadingItem className="flexaligncenter">
          <StyledSvg src="/heart.png" alt="logo" />
          {username}
        </HeadingItem>
        <HeadingItem
          className="flexaligncenter pointeronhover"
          onClick={handleLogout}
        >
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
        <Toggles>
          <ToggleBtn
            className={
              selectedToggle === 'InProgress'
                ? 'selectedtoggle'
                : 'deselectedtoggle'
            }
            onClick={() => handleToggle('InProgress')}
          >
            Pågående inspeksjoner
          </ToggleBtn>
          <p>|</p>
          <ToggleBtn
            className={
              selectedToggle === 'Completed'
                ? 'selectedtoggle'
                : 'deselectedtoggle'
            }
            onClick={() => handleToggle('Completed')}
          >
            Fullførte inspeksjoner
          </ToggleBtn>
        </Toggles>
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
  .selectedtoggle {
    border-bottom: 2px solid #fcae3d;
  }
  .deselectedtoggle {
    color: grey;
  }
`;

const Toggles = styled.div`
  display: flex;
  column-gap: 0.4em;
  justify-content: flex-start;
  color: black;
  column-gap: 1em;
`;

const ToggleBtn = styled.p`
  :hover {
    cursor: pointer;
  }
`;

const TopBar = styled.div`
  padding: 0.2em 0.8em;
  background-color: #353e43;
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
