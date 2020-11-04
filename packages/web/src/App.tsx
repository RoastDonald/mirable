import React,{Fragment} from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './theme/global-style';
import {defaultTheme} from './theme';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/home/home.page';



// import Artwork from './components/artwork/artwork.component';
// import Waveform from './components/waveform/waveform.component';




const App = () => {
  return (
    <Fragment>
      <GlobalStyles/>
      <ThemeProvider theme={defaultTheme}>
        <Switch>
        <Route path="/" component={HomePage}/>
        </Switch>
      </ThemeProvider>
     
    </Fragment>
  )
}

export default App;


