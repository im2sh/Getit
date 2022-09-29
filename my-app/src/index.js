import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//import Clock from '../../2차시/clock';
import Comment from './2차시-2/Comment';
import CommentList from './2차시-2/CommentList';

//댓글 만들기
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>
);


//시계 만들기
// const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(()=>{
//     root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// },1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
