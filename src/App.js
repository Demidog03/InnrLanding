import './App.css';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'custom-cursor-react/dist/index.css';
import Home from "./components/Pages/Home";
import Partnership from "./components/Pages/Partnership";
import {useEffect} from "react";

function App() {
    useEffect(() => {
        AOS.init();
    }, [])

  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/partnership" element={<Partnership />} />
        </Routes>
    </div>
  );
}

export default App;
