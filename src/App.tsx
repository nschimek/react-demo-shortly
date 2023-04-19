import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return (
    <div className="container-sm container-xxl p-0">
      <Header />
      {/* if this were a more complex app, I would instead use a router-outlet component here */}
      <Home />
      <Footer />
    </div>
  );
};

export default App;
