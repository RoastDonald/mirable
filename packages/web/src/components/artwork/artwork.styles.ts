import styled from 'styled-components';


export const ArtworkContainer = styled.div`
    max-width:30rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-radius:${({theme})=>theme.borderRadius};
    background-color:${({theme})=>theme.palette.secondary.main};
    box-shadow: 0px 0px 20px rgba(102, 102, 102, 0.50);
`;


export const ArtworkCta = styled.div`
    position:absolute;
    top:6px;
    right:12px;
    display:flex;
`;

export const ArtworkTop = styled.div`
    margin:1.5rem;
    position:relative;

    img {
    border-radius:${({theme})=>theme.borderRadius};
    }
`;

export const ArtworkBottom = styled.div`
    width:80%;
    margin-top:2rem;
    display:flex;
    justify-content:space-between;
    border-radius:${({theme})=>theme.borderRadius};
`;
