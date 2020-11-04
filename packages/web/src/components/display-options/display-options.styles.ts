import styled from 'styled-components';


export const DisplayOptionsWrapper = styled.div`
    display:flex;
    justify-content:space-between;
`;


type DisplayOptionProps = {
    backgroundImageWrapper:string;
}

export const DisplayOption = styled.button<DisplayOptionProps>`
    outline:none;
    background: #E9E9E9;
border: 2px solid #DCDCDC;
background-size: inherit;
    background-repeat: no-repeat;
    background-position: center;

background-image:url(${({backgroundImageWrapper})=>backgroundImageWrapper});
border-radius:${({theme})=>theme.borderRadius};
padding: 2.5rem 2.5rem;
`;