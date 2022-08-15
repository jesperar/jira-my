import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createRoot} from 'react-dom/client'
import {loadDevTools} from "jira-dev-tool";
import {AuthProvider} from "./context/auth-content";

const container = document.getElementById('root')
const root = createRoot(container as Element | DocumentFragment);

loadDevTools(() => {
  root.render(
    <React.StrictMode>
      <AuthProvider>
        <App/>
      </AuthProvider>
    </React.StrictMode>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
