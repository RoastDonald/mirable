import React from 'react'
import {ButtonContainer} from './button.styles';



export type ButtonProps = {
    variant: "primary" | "secondary";
    children: React.ReactNode;
    className?:string;
};



const Button  = ({variant="primary",children,...rest}:ButtonProps) => {
    return (
        <ButtonContainer variant={variant} {...rest}>
            {children}
        </ButtonContainer>
    )
}

export default Button 
