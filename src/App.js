import React from 'react';

import { GlobalStyle } from './style';
import Footer from './components/footer';
import Header from './components/header';
import MainContent from './components/mainContent';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;

