import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import Description from "./components/Description/Description";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Welcome/>
      <Description/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
