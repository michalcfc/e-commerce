
import React from "react"

import {
    ButtonWrapper
} from "./Button.styles"

const Button = ({ 
    name, 
    onClick }) => {
    return (
        <ButtonWrapper
            onClick={onClick} 
        >
            {name}
        </ButtonWrapper>
    )
}

export default Button