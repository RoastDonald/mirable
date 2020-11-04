import styled from 'styled-components';



export const LogoContainer = styled.div`
            max-width: 25rem;
    
    .logo {
        &__title {
            fill:#121212;
            width: 10rem;
            height: 7.4rem;
            margin-left:3.3rem;
        }

        &__circle-box {
            width:7.4rem;
            height:7.4rem;
            border-radius:50%;
            background: linear-gradient(134.8deg, #AF4EFB 11.31%, #DB8196 107.55%);
            border: 2px solid #D8D8D8;
            box-sizing: border-box;
            display:flex;
            align-items:center;
            justify-content:center;
            .logo {
                width:70%;
                height:70%;
                fill:#fff;
            }
        }
    }
`;
