import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import State from "./Redux/State";
import {addComment} from "./Redux/State";

export let rerenderEntireTree = () =>{

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<React.StrictMode>
<App state={State} addComment={addComment} />
</React.StrictMode>
);
}
