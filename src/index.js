import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from './demo';
import DemoTwo from './demoTwo';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Demo />
    <DemoTwo />
  </React.StrictMode>
);
// const root = document.getElementById('root');
// ReactDOM.render(<React.StrictMode>
//   <Demo />
//   <DemoTwo />
// </React.StrictMode>, root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
