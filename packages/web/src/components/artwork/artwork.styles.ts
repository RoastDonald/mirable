import styled from 'styled-components';


export const ArtworkContainer = styled.div`
z-index:100;
    padding-bottom:1rem;
    max-width:25rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-radius:${({theme})=>theme.borderRadius};
    background-color:${({theme})=>theme.palette.secondary.main};
    box-shadow: 0px 0px 20px rgba(102, 102, 102, 0.50);

    .icon:not(:last-of-type){
        margin-right:5px;
    }

    .icon svg{
      fill:#fff;
    }
   
`;


export const ArtworkCta = styled.div`
    position:absolute;
    top:6px;
    right:12px;
    display:flex;
    display: flex;
    justify-content: space-between;
    
  

`;

export const ArtworkTop = styled.div`
    margin:1.5rem;
    margin-bottom:0.5rem;
    position:relative;

    img {
    border-radius:${({theme})=>theme.borderRadius} ${({theme})=>theme.borderRadius} 3rem 3rem   ;
    }
`;

export const ArtworkBottom = styled.div`
    width:70%;  
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    border-radius:${({theme})=>theme.borderRadius};
`;
