import React from 'react'
import styled from'styled-components'
import {theme} from '../../Theme/theme'
import { FaExternalLinkAlt } from 'react-icons/fa'
import {Section} from '../section/Section'
import { PrimaryButton } from '../buttons/Buttons'
import { Element } from 'react-scroll'


export default function Blogs() {
    return (
        <Element name='Blogs'>
            <Section size='90'>
                <h2>Blogs</h2>
                <BlogsContainer>
                    <BlogPost>
                        <div className="image-container">

                        </div>
                        <h4>How I taught myself how to code without internet</h4>
                    </BlogPost>
                    <BlogPost>
                        <div className="image-container">

                        </div>
                        <h4>How I taught myself how to code without internet</h4>
                    </BlogPost>
                    <BlogPost>
                        <div className="image-container">

                        </div>
                        <h4>How I taught myself how to code without internet</h4>
                    </BlogPost>
                <ButtonContainer>
                    <PrimaryButton href='https://hashnode.com/@JusticeM'>View More <FaExternalLinkAlt /></PrimaryButton>
                </ButtonContainer>
                </BlogsContainer>
            </Section>
        </Element>
    )
}

const BlogsContainer = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 30px;
    align-items: center;

    @media screen and (max-width: 768px){
        margin-top: 100px;
        padding-bottom: 100px;
        
    }
`
const BlogPost = styled.div`
    width: clamp(200px, 18vw, 300px);
    height: clamp(200px, 5vw, 300px);
    
    .image-container{
        height: clamp(150px, 9vw, 200px);
        background: ${theme.main};
    }
    h4{
        color: ${theme.light.heading};
        font-family: 'Poppins-medium';
        text-align: center;
    }
    
`
const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
`