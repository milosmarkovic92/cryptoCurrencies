import React from "react";
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Navbar = () => {

    const handleLogin = () => {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.reload();
    };

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    return (
        <StyledNav>
            <LinksContainer>
                <StyledLink to="/" > Home</StyledLink>
                {isLoggedIn ? <StyledLink to="/favorites" >Favorites</StyledLink> : null}
            </LinksContainer>
            {isLoggedIn ? null : <LoginButton onClick={() => handleLogin()}>Login</LoginButton>}

        </StyledNav>
    )
}
const StyledNav = styled('nav')`
    display: flex;
    align-items: center;
    padding: 20px 5px 5px;
    border-bottom: 3px solid #B4B4B3;
    margin-bottom: 10px;
`;

const LinksContainer = styled('span')`
    width: 100%;
`;

const StyledLink = styled(NavLink)`
    padding: 10px;
    text-decoration: none;
    color: #B4B4B3;
    font-size: 1rem;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    &:visited {
        color: #B4B4B3;
    }
    &.active {
        color: #459FB6;
    }
    
`;

const LoginButton = styled('button')`
    width: 100px;
    height: 40px;
    border-radius: 3px;
    border: none;
    background-color: #459FB6;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
`;