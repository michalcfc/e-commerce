import { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './../themes';
import { GlobalStyles } from './../shared/styles';

import Layout from "../layout"

import { Provider } from 'react-redux'
import configureStore  from "../store"

export default function App({ Component, pageProps }) {

  const store = configureStore(pageProps.initialReduxState)

  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <>
      <ThemeProvider 
        theme={
        theme === 'light' 
        ? lightTheme 
        : darkTheme
      }
      >
      <GlobalStyles />
      <Provider 
        store={store}
      >
        <Layout 
          toggleTheme={toggleTheme}
          >
              <Component 
                {...pageProps} 
                />
        </Layout>
        </Provider>
      </ThemeProvider>
      
    </>
  )
}