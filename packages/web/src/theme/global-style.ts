import {createGlobalStyle } from 'styled-components';
import ExoFont from './fonts/static/Exo2-Medium.ttf';

const GlobalStyles = createGlobalStyle`
    * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 100%;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: white;
}

    body {margin: 0;}

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

    .icon .small {
        width:1.6rem;
        height:1.6rem;
    }

    .icon .medium {
        width:2.4rem;
        height:2.4rem;
    }

    .icon .large {
        width:3.6rem;
        height:3.6rem;
    }

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
    }

   



    .lds-ripple {
  display: inline-block;
  position: relative;
}
.lds-ripple .f1 {
    z-index:90;
  position: absolute;
  border: 4px solid #FFBA7B;
  opacity: 1;
  border-radius: 20px;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple .f2{
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}

@keyframes rainbow { 
    0%{background-position:0% 82%}
    50%{background-position:100% 19%}
    100%{background-position:0% 82%}
}



.filter-button-anim-enter {
  opacity: 0;
}
.filter-button-anim-enter-active {
  opacity: 1;
  transition: all 200ms ease;
}
.filter-button-anim-exit {
  opacity: 1;
}
.filter-button-anim-exit-active {
  opacity: 0;
  transition: all 200ms ease;
}



`;

export default GlobalStyles;

