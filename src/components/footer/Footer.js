import React from 'react'
import { FaBlog, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa'
import styled from'styled-components'
import {theme} from '../../Theme/theme'
import {Section, DoubleFlex, Left, Right} from '../section/Section'
import ContactForm from '../forms/ContactForm'
import { Element } from 'react-scroll'

const FooterContent = styled.div`
    margin-right: auto;
    
    @media screen and (max-width: 768px){
        padding-top: 80px;
        padding-bottom: 80px;
    }

    h5{
        color: #ffffff;
        font-size: 6vw;
        font-family: 'Poppins-bold';    
    }

    .icons{
        gap: 20px;
        display: flex;
        a{
            color: #ffffff;
            font-size: 1.5rem;
        }
    }
`

const ContactFormContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    span{
        display: flex;
        gap: 15px;
        align-items: center;
        color: #ffffff;
    }
`
const CopyRight = styled.div`
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 0.7rem;
    position: absolute;
    bottom: 0;
`

export default function Footer() {
    return (
        <Element name='Contact'>
            <Section type='colored' size='50'>
                <DoubleFlex size='half'>
                <Left>
                    <FooterContent>
                        <h5>Justice M</h5>
                        <div className="icons">
                            <a href="https://www.twitter.com/justicem_dev"><FaTwitter/></a>
                            <a href="https://www.linkedin.com/in/justice-mlangeni-5b2673220/"><FaLinkedinIn/></a>
                            <a href="https://hashnode.com/@JusticeM"><FaBlog/></a>
                        </div>
                    </FooterContent>
                </Left>
                <Right>
                    <ContactFormContainer>
                        <span>
                            <FaEnvelope />justicem.dev@gmail.com
                        </span>
                        <ContactForm />
                    </ContactFormContainer>
                </Right>
                </DoubleFlex>
                <CopyRight>Copy Right 2021. All Rights Reserved.</CopyRight>
            </Section>
        </Element>
    )
}
