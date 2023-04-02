import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import "./i18n";
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import i18n from "./i18n";

const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_CENTER,
    timeout: 80000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
}
i18n.changeLanguage('ru')
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Suspense fallback={(<div>Loading...</div>)}>
                <App />
            </Suspense>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
