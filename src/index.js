import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import {Provider} from "react-redux";
import reportWebVitals from './reportWebVitals';
import {store} from "./store/store";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

reportWebVitals();
