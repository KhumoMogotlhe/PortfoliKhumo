import { ThemeProvider } from 'styled-components';
import { theme } from './components/bookpage/styles/theme';

import { useState } from 'react'
import './App.css'
import { GlobalStyles } from './components/bookpage/styles/GlobalStyles';
import BookPage from './components/bookpage/BookPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BookPage />
      
    </ThemeProvider>
  )
}

export default App
