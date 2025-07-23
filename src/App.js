import './App.scss';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import DataSciense from './components/dataSciense/dataSciense';
import Card from './components/card/card';
import About from './components/about/about';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <DataSciense />
      <Card/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;
