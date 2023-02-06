import React from 'react'
import styled from 'styled-components'
import "../assets/icons/css/style.css"

const InputField = ({inputType, inputIcon}) => {
    return (
        <Input>
            <input type={inputType} />
            <i className={inputIcon}></i>
        </Input>
    )
}

const Input = styled.div`
    position: relative;

    input{
        width: 300px;
        padding: 10px 5px;
        border-radius: 30px;
        background-color: grey;
        border: none;
    }

    i{
        position absolute;
    }
`

export default InputField