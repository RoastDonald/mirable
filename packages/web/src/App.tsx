import React,{Fragment} from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './theme/global-style';
import {defaultTheme} from './theme';

import Artwork from './components/artwork/artwork.component';


const App = () => {
  return (
    <Fragment>
      <GlobalStyles/>
      <ThemeProvider theme={defaultTheme}>
        <Artwork imageURL='https://dkt4eyd7dv0ic.cloudfront.net/visual/9ee181b7-0a06-4b52-b0b3-53bdfdf3039a.jpg'/>
      </ThemeProvider>
     
    </Fragment>
  )
}

export default App;


