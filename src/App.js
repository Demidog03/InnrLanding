import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import Description from "./components/Description/Description";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';
import JoinTelegram from "./components/JoinTelegram/JoinTelegram";

import joinTelegramClasses from './components/JoinTelegram/joinTelegram.module.css'

function App() {
    const styles = {
        mixBlendMode: 'difference',
        zIndex: '1',
    }
    const cursor = 3
  return (
    <div className="App">
      <Header/>
      <Welcome/>
      <Description/>
      <Contact/>
      <JoinTelegram/>
      <Footer/>
        <div style={styles}>
        <CustomCursor
            style={styles}
            targets={['a', '.link', 'img', 'button', 'input', 'select']}
            customClass='custom-cursor'
            dimensions={90}
            fill='#fff'
            smoothness={{
                movement: 0.4,
                scale: 0.1,
                opacity: 1,
            }}
            opacity={1}
            targetOpacity={1}
            targetScale={cursor}
        />
        </div>

    </div>
  );
}

export default App;
