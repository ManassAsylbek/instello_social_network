import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './Redux/redaxStore';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {

    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <HashRouter>
                    <App/>
                </HashRouter>
            </Provider>
        </React.StrictMode>
    );
}

rerenderEntireTree();

store.subscribe(()=>{
    rerenderEntireTree();
})

reportWebVitals();
