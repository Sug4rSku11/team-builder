import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// import { v4 as uuid } from 'uuid'

// 👉 the shape of the list of friends from API
// const initialMemberList = [
//   {
//     id: uuid(), // uuid is a lib to generate random, unique ids
//     name: 'Joseph',
//     email: 'joseph@joseph.com',
//     role: 'Fullstack Developer',
//   },
// ]

// // 👉 simulating axios for [GET] and [POST]
// export default {
//   get() {
//     return Promise.resolve({ status: 200, success: true, data: initialMemberList })
//   },
//   post(url, { name, email, role }) {
//     const newInput = { id: uuid(), name, email, role }
//     return Promise.resolve({ status: 200, success: true, data: newInput })
//   }
// }