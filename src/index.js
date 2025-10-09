import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import UserStore from "./store/UserStore";
import PhotoListStore from "./store/PhotoListStore";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={
        {
            user: new UserStore(),
            photoList: new PhotoListStore(),
        }
    }>
        <App />
    </Context.Provider>
);