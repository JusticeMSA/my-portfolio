import React from 'react'
import styled from 'styled-components'
import { theme } from '../../Theme/theme'
import { Section, DoubleFlex, Left, Right } from '../section/Section'
import dots from '../../images/dots.svg'
import {Element} from 'react-scroll'


const AboutText = styled.div`
    margin-bottom: 25px;

    p{
        color: ${theme.light.foreground};
        font-size: 1.2rem;

        @media screen and (max-width: 768px){
            font-size: 1rem;
            text-align: center;
            margin-bottom: 20px;
        }
    }
`

const Skills = styled.div`

    h3{
        color: ${theme.main};
        font-family: 'Poppins-bold';
        font-size: 1.2rem;
        margin-bottom: 15px;
    }

    .flex-container{
        display: flex;
        gap: 20px;

        div{
            background: ${theme.main};
            border-radius: 5px;
            width: 40px;
            height: 40px;
        }
    }

    @media screen and (max-width: 768px){
        margin: auto;
        text-align: center;
        
    }

`

const AboutImage =styled.div`
    width: max(20vw, 150px);
    height: max(20vw, 150px);
    border-radius: 5px;
    background: ${theme.main};
    position: relative;
    margin-right: auto;

    &::after{
        content: '';
        position: absolute;
        top: -25px;
        right: -25px;
        width: max(20vw, 150px);
        height: max(20vw, 150px);
        border: solid 8px ${theme.main};
        border-radius: 5px
    }

    &::before{
        content: '';
        position: absolute;
        top: -50px;
        right: -50px;
        width: max(20vw, 150px);
        height: max(20vw, 150px);
        border: solid 8px ${theme.main};
        border-radius: 5px
    }

    @media screen and (max-width: 768px){
        margin-top: 50px;
        
    }
`
const Dots = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;

    .top-right{
        width: 20vw;
        position: absolute;
        bottom: 20vh;
        right: -5vw;
    }

    .bottom-left{
        width: 15vw;
        position: absolute;
        bottom: 10%;
        left: 5vw;
        transform: rotate(90deg);
    }
`

export default function About() {
    return (
        <Element name='About'>
            <Section size='90'>
                <Dots>
                <img src={dots} alt="dots" className="top-right" />
                <img src={dots} alt="dots" className="bottom-left" />
                </Dots>
                <h2>About</h2>
                <DoubleFlex>
                <Left>
                    <AboutImage>

                    </AboutImage>
                </Left>
                <Right>
                    <AboutText>
                        <p>
                        I am a frontend developer and a builder of
                        the website of things I am a frontend
                        developer and a builder of the website of
                        things.
                        </p>
                        <p>
                        I am a frontend developer and a builder of
                        the website of things I am a frontend
                        </p>
                    </AboutText>
                    <Skills>
                        <h3>Skills</h3>
                        <div className="flex-container">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </Skills>
                </Right>
                </DoubleFlex>
            </Section>
        </Element>
    )
}
