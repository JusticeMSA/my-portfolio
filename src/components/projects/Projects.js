import React from 'react'
import styled from'styled-components'
import {theme} from '../../Theme/theme'
import {FaArrowCircleRight, FaArrowCircleLeft, FaExternalLinkAlt} from 'react-icons/fa'
import {Section, SingleFlex, Left, Right} from '../section/Section'
import { PrimaryButton, SecondaryButton } from '../buttons/Buttons'
import image1 from '../../images/geeked-profile.png'
import dots from '../../images/dots.svg'
import { Element } from 'react-scroll'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


export default function Projects() {

    const slideImages = [
        {
          url: image1,
          caption: "A web app to view a better look of a github user's profile. Built with React - GithubAPI - Chartjs and more",
          github: "https://github.com/JusticeMSA/geekprofile",
          link: "https://geekedprofile.web.app",
        },
      ];

    return (
        <Element name='Projects'>
            <Section size='90'>
                <Dots>
                    <img src={dots} alt="dots" className="middle-right" />
                    <img src={dots} alt="dots" className="bottom-left" />
                </Dots>
                <h2>Projects</h2>
                <SingleFlex>
                <SlideContainer>

                <Slide>

                {slideImages.map((slideImage, index)=> (
                    <div className="each-slide" key={index}>
                    <img src={slideImage.url} alt="" />
                    <h4>Geeked Profile</h4>
                    <p>{slideImage.caption}</p>
                    <div className="button-container">
                        <PrimaryButton href={slideImage.link}>View</PrimaryButton>
                        <SecondaryButton href={slideImage.github} target='_blank'>GitHub Repo <FaExternalLinkAlt /></SecondaryButton>
                    </div>
                    </div>
                ))}
                </Slide>
</SlideContainer>
                </SingleFlex>
            </Section>
        </Element>
    )
}

const SlideContainer = styled.div`
    width: 40vw;
    flex: 0.5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 20vh;
    border: solid 1px transparent;

    img{
        width: 100%;
    }
    p{
        color: ${theme.light.foreground};
        font-size: 1rem;
        text-align: center;
        padding: 0 25px;
    }
    h4{
        font-size: 1.8rem;
        color: ${theme.light.heading};
        text-align: center;
    }
    .button-container{
        width: 100%;
        margin-top: 15px;
        display: flex;
        justify-content: center;
        gap: 15px;
    }
`
const Icon = styled.div`
    font-size: 2rem;
    margin: 20px;
    color: ${theme.main}
`

const Dots = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;

    .middle-right{
        width: 25vw;
        position: absolute;
        top: 50%;
        right: -5vw;
        transform: translateY(-50%);

        @media screen and (max-width: 768px){
        transform: translateX(40%);
            
            
        }
    }
    .bottom-left{
        width: 25vw;
        position: absolute;
        bottom: 10%;
        left: 0;
        transform: translateX(-50%);
    }
`