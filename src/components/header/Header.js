import styled from 'styled-components'
import {theme} from '../../Theme/theme'
import {Section, DoubleFlex, Left, Right} from '../section/Section'
import { PrimaryButton } from '../buttons/Buttons'
import { FaTwitter, FaLinkedinIn, FaBlog } from 'react-icons/fa'
import img from '../../images/Asset 1.png'
import dots from '../../images/dots.svg'
import triangle from '../../images/triangle.svg'
import {Element, Link} from 'react-scroll'


const TextContainer = styled.div`
span{
    color: ${theme.main};
    font-size: 1.2rem;
    font-family: 'Poppins-bold';
}
h1{
    color: ${theme.light.heading};
    font-size: 8vw;
    font-family: 'Poppins-bold';
    line-height: 8vw;
}
p{
    color: ${theme.light.foreground};
    font-size: 1.1rem;
}

@media screen and (max-width: 768px){
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        font-size: 13vw;
        text-align: center;
        line-height: 13vw;

    }
    span{
        margin-bottom: 15px;

    }
    p{
        text-align: center;
        font-size: 1rem;
    }
}
`

const ImageContainer = styled.div`
    width: clamp(150px, 100%, 300px);
    margin: auto;
    padding: 25px;
    img{
        width: 100%;
    }

    @media screen and (max-width: 768px){
        display: none;
    }
`
const IconsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: absolute;
    right: 12%;
    bottom: 50%;
    transform: translateY(50%);
    a{
        font-size: 1.5rem;
        color: ${theme.main};
    }

@media screen and (max-width: 768px){
    transform: none;
    bottom: 10%;
    right: 50%;
    flex-direction: row;
    transform: translateX(50%);
}

`

const Dots = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
    overflow-x: hidden;

    .bottom-left{
        width: 20vw;
        position: absolute;
        bottom: 0;
        left: -5vw;
    }
    .top-right{
        width: 20vw;
        position: absolute;
        top: 10%;
        right: -10vw;
    }
    .triangle{
        width: 30px;
        position: absolute;

        &.one{
            top: 75vh;
            left: 70%;
            transform: rotate(45deg);
        }
        &.two{
            top: 65vh;
            left: 50%;
            transform: rotate(180deg);
        }
        &.three{
            top: 90vh;
            left: 30%;
            transform: rotate(45deg);
        }
        &.four{
            top: 30vh;
            left: 40%;
            transform: rotate(15deg);
        }
    }
    
`
export default function Header(){
    return(
        <Element name='Home'>
            <Section size='100'>
                <Dots>
                    <img src={dots} alt="dots" className="bottom-left" />
                    <img src={dots} alt="dots" className="top-right" />
                    <img src={triangle} alt="dots" className="triangle one" />
                    <img src={triangle} alt="dots" className="triangle two" />
                    <img src={triangle} alt="dots" className="triangle three" />
                    <img src={triangle} alt="dots" className="triangle four" />
                </Dots>
                <DoubleFlex>
                    <Left>
                        <TextContainer>
                            <span>Hi, my name is</span>
                            <h1>Justice Mlangeni</h1>
                            <br />
                            <p>
                                I am a frontend developer from 
                                Eastrand, South Africa and I build stuff for the web.
                            </p><br />
                            <Link to='Projects' smooth={true} offset={-50} duration={1000}><PrimaryButton href='Projects'>My Work</PrimaryButton></Link>
                        </TextContainer>
                    </Left>
                    <Right>
                        <ImageContainer>
                            <img src={img} alt="" />
                        </ImageContainer>
                    </Right>
                </DoubleFlex>
                <IconsContainer>
                    <a href='https://www.twitter.com/justicem_dev'><FaTwitter/></a>
                    <a href='https://www.linkedin.com/in/justice-mlangeni-5b2673220/'><FaLinkedinIn/></a>
                    <a href='https://hashnode.com/@JusticeM'><FaBlog/></a>
                </IconsContainer>
            </Section>
        </Element>
    )
}