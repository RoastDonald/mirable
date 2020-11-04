import styled from 'styled-components';



export const HeaderOutter = styled.div`
    width:100%;
    position:relative;
    font-size:1.4rem;
    box-shadow: 0px 0px 30px -5px rgba(0,0,0,0.2);
    padding: 1rem 0;

    .cta__icon {
        width:2.5rem;
        height:2.5rem;
        fill:#fff;
    }

    .cta__btn {
        max-width:12rem;
        margin-left:2rem;
        width: max-content;
        cursor:pointer;

    }


`;
export const UserAvatar = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:${({theme})=>theme.borderRadius};
    width:4.8rem;
    height:4.8rem;
    background: #E9E9E9;
border: 2px solid #DCDCDC;
cursor:pointer;
`;
export const HeaderInner = styled.div`
    width:80%;
    justify-content:space-between;
    padding-top:1rem;
    margin:0 auto;
    display: flex;
    align-items:center;
`;

export const LogoBox = styled.div`
        cursor:pointer;

`;



export const IconContainer = styled.div`
flex: 0 0 15%;
min-width: 3.6rem;
    max-width: 3.6rem;
    height:3.6rem;
    display:flex;
    background-color:#515151;
    border-radius:50%;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    
  
`;


export const ButtonText = styled.span`
    color:#121212;
    font-size:1.4rem;


    &::first-letter {
        text-transform:uppercase;
    }
`;

export const HeaderCta = styled.div`
    display:flex;
    align-items: center;
    ${IconContainer}:not(:last-of-type){
        margin-right:2.6rem;
    }
    

`;