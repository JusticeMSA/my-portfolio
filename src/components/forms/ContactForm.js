import React from 'react'
import styled from 'styled-components'
import { theme } from '../../Theme/theme'
import {AllWhiteBorderButton} from '../buttons/Buttons'


export default function ContactForm() {
    return (
        <Form>
            <Input type='text' placeholder='Name' required/>
            <Input type='email' placeholder='Email' required />
            <Message type='text' placeholder='Message'  required/>
            <AllWhiteBorderButton>Send</AllWhiteBorderButton>
        </Form>
    )
}

const Form = styled.form`
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
    `
    const Input = styled.input`
    border: none;
    border-radius: 3px;
    height: 35px;
    padding: 0 10px;
    font-size: 0.8rem;
    color: ${theme.light.foreground};
    font-family: 'Poppins';
    `
    const Message = styled.textarea`
    border: none;
    border-radius: 3px;
    height: 100px;
    padding: 10px;
    font-size: 0.8rem;
    color: ${theme.light.foreground};

    ::placeholder{
        font-family: 'Poppins'
    }
    
`