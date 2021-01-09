import React, {useState} from 'react';
import Header from '../src/components/Header'
import GlobalStyle from './styles/global'

import { ThemeProvider } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

function App() {
  const [theme, setTheme] = useState(light)

  const toggleTheme =() =>{
    setTheme(theme.title === 'light'? dark: light) //se o theme for light troca po dark e vice-versa
  }
  return (
    <ThemeProvider theme={theme}>

    <div className="App">
      <GlobalStyle/>
      <Header toggleTheme={toggleTheme}/>
    </div>
    </ThemeProvider>
  );
}

export default App;
