import styled from 'styled-components'
import { theme } from '../../Theme/theme'

export const Section = styled.section`
min-height: ${props => props.size + 'vh'};
position: relative;
background: ${props => props.type === 'colored'? theme.main : theme.light.background};
padding: 0 12%; 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


h2{
    color: ${theme.light.heading};
    font-family: 'Poppins-bold';
    font-size: max(3vw, 25px);
    text-align: center;
    width: fit-content;
    margin: auto;
    padding-top: 2rem;
    position: absolute;
    top: 0;
     &::after{
         content: '';
         position: absolute;
         width: 100%;
         height: 8px;
         bottom: -5px;
        left: 0;
         background: ${theme.main};
     }
}

@media screen and (max-width: 768px){
    margin: auto;
    text-align: center;
    
}
`

export const DoubleFlex = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
height: 100%;
width: 100%;



@media screen and (max-width: 768px){
    flex-direction: column;
    gap: 25px;
}

`

export const Left = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width: 768px){
    flex: unset;
}

`
export const Right = styled.div`
flex: 1;
flex-direction: column;
display: flex;
justify-content: center;

@media screen and (max-width: 768px){
    flex: unset;
}
@media screen and (max-width: 768px){
    flex: unset;
}


`

export const SingleFlex= styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
flex-grow: 1;

`