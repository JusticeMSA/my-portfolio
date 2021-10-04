import styled from 'styled-components'
import { theme } from '../../Theme/theme'

export const Nav = styled.nav`
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 12%;
    z-index: 1;
    
    @media screen and (max-width: 768px){
        padding: 0 10%;
        
    }
`

export const NavLogo = styled.a`
    color: ${theme.light.heading};
    font-size: 1.5rem;
    font-family: 'Poppins-bold', sans-serif;
`

export const NavLinks = styled.ul`
    display: flex;
    gap: 2rem;
    a{
        color: ${theme.light.foreground};
        font-size: 0.85rem;

        &:hover{
            color: ${theme.main};
            transition: 1s;
        }
    }
    @media screen and (max-width: 768px){
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        height: ${props => props.menuOpen? '100vh' : 0};
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        background: ${theme.light.background};

        a{
            font-size: 1.2rem;
            color: ${theme.light.foreground};
        }
    }
`

export const MenuButton = styled.div`
    color: ${theme.main};
    font-size: 1.8rem;
    position: absolute;
    right: 12%;
    z-index: 1000;

    @media screen and (min-width: 768px){
        display: none;
    }
`