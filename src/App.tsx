import { ThemeProvider } from 'styled-components';
import { theme } from './components/pages/bookpage/styles/theme';

// import { useState } from 'react'
import './App.css'
// import { GlobalStyles } from './components/bookpage/styles/GlobalStyles';
import BookPage from './components/pages/bookpage/BookPage';
import { useState } from 'react';
import SecondPage from './components/pages/second-page/SecondPage';
import ThirdPage from './components/pages/third-page/ThirdPage';
import FourthPage from './components/pages/fourth-page/FourthPage';
import FifthPage from './components/pages/fifth-page/FifthPage';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    setCurrentPage(prev => prev + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
  };

  return (
    <ThemeProvider theme={theme}>
    {/* <GlobalStyles /> */}
    {currentPage === 1 && <BookPage onNext={goToNextPage} />}
    {currentPage === 2 && <SecondPage onNext={goToNextPage} onPrev={goToPrevPage} />}
    {currentPage === 3 && <ThirdPage onNext={goToNextPage} onPrev={goToPrevPage} />}
    {currentPage === 4 && <FourthPage onNext={goToNextPage} onPrev={goToPrevPage} />}
    {currentPage === 5 && <FifthPage onNext={goToNextPage} onPrev={goToPrevPage} />}


  </ThemeProvider>
  );
}

export default App;

