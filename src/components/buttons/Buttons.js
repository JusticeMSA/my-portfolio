import styled from 'styled-components'
import {theme} from '.././../Theme/theme'


const Button = styled.a`
`

export const PrimaryButton = styled.a`
text-decoration: none;
display: block;
width: 7rem;
text-align: center;
font-size: 0.8rem;
padding: 0.4rem 0;
border-radius: 4px;
background: ${theme.main};
color: #ffffff;

`

export const SecondaryButton = styled.a`
text-decoration: none;
display: block;
width: 7rem;
text-align: center;
font-size: 0.8rem;
padding: 0.4rem 0;
border-radius: 4px;
background: #ffffff;
color: ${theme.main};
border: solid 2px ${theme.main};

`

export const AllWhiteBorderButton = styled.a`
text-decoration: none;
display: block;
width: rem;
text-align: center;
font-size: 0.8rem;
padding: 0.4rem 0;
border-radius: 4px;
background: transparent;
color: #ffffff;
border: solid 2px #ffffff;
cursor: pointer;

:hover{
    background: #ffffff;
    color: ${theme.main};
    font-weight: bold;
}

`