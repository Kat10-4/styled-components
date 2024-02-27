import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyledBtn, SuperBtn} from "./components/Button.styled";
import {Link} from "./components/Link.styled";
import {Menu} from "./components/Menu.styled";
import {myTheme} from "./styles/animations/Theme.styled";


function App() {
    return (
        <div className="App">
            {/*<Menu>*/}
            {/*    <ul>*/}
            {/*        <li><a href="">menu item 1</a></li>*/}
            {/*        <li><a href="">menu item 2</a></li>*/}
            {/*        <li><a href="">menu item 3</a></li>*/}
            {/*    </ul>*/}
            {/*</Menu>*/}
            <Box>
                {/*<StyledBtn as={Link} href={'#'}>linkComponent</StyledBtn>*/}
                {/*<StyledBtn as="a" href={'#'}>link</StyledBtn>*/}
                {/*<StyledBtn color={'red'} fontSize={"20px"}>Hello</StyledBtn>*/}
                {/*<StyledBtn color={'green'}>Hello</StyledBtn>*/}
                <StyledBtn color={myTheme.colors.primary} btnType={'primary'} active>Hello</StyledBtn>
                <StyledBtn color={myTheme.colors.secondary} btnType={'outlined'}>Hello</StyledBtn>
                {/*<SuperBtn>World</SuperBtn>*/}
            </Box>
        </div>
    );
}

export default App;

const Box = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    gap: 20px;

    button {
        cursor: pointer;
    }

    ${Link} {
        cursor: zoom-in;
    }

    @media ${myTheme.media.tablet} {
        flex-direction: column;
    }`

