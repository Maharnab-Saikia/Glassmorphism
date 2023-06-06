import './App.css';
import Configuration from './components/Configuration';
import Footer from './components/Footer';
import Preview from './components/Preview';

function App() {
  return (
    <>
      <div className="circle a"></div>
      <div className="circle b"></div>
      <div className="circle c"></div>
      <div className="circle d"></div>
      <div className="circle e"></div>

      <Preview />
      <Configuration />
      <Footer />
    </>
  );
}

export default App;
