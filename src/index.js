import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './Redux/redaxStore';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {

    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
    );
}

rerenderEntireTree();

store.subscribe(()=>{
    rerenderEntireTree();
})

reportWebVitals();
