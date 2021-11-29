import React from 'react';
import GlobalStyle from './styles/GlobalStyles';
import Card from './pages/Card';
import Header from './components/Header/index';
import Footer from './components/Footer/index';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
