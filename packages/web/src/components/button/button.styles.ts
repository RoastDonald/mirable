import styled from 'styled-components';
import { ButtonProps } from './button.component';



export const ButtonContainer = styled.button<ButtonProps>`
    padding: 6px 20px;
    width:100%;
    min-width: 64px;
    font-weight:bold;
    border-radius:${({theme})=>theme.borderRadius};
    background-color:${({variant,theme})=>theme.palette[variant].main};
    border: 2px solid ${({variant,theme})=>theme.palette.common.black}
`;
