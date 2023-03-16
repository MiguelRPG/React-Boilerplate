import './global.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home'



const App = () => {
    return (
      <div className='main-content'>
        <Header />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    );
};


export default App;
