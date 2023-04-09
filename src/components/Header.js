import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
            <img src="./images/logo-no-background.png"alt="my" width="100px"/>
        </NavLink>
        <Nav/>
    </MainHeader>
  )
}
const MainHeader = styled.header`
    padding: 1rem 1rem;
    background-color: ${({theme}) =>theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-item: center;
    position: relative;

    .logo{
        height: 4rem;
        width: 4rem;
    }
`;

export default Header;