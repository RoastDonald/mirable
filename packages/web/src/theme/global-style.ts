import {createGlobalStyle } from 'styled-components';
import ExoFont from './fonts/static/Exo2-Medium.ttf';

const GlobalStyles = createGlobalStyle`
 
    html {
        font-size: 62.5%;
        font-family:'Exo 2', Calibri, sans-serif;
        color:#734C4C;
    }
    @font-face {
        font-family: 'Exo 2';
        src: local('Exo 2')
        url(${ExoFont}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
    
    img {
        width:100%;
        height:100%;
    }

`;

export default GlobalStyles;

