import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import MyFun from './MyFunction';
// import MyFun1 from './MyFun2';
// import StatefullComp from './StatefullComp';
// import StateObj from './StateObj';
// import MapComp from './MapComp';
// import EventsComp from './EventsComp';
// import SetStateComp from './SetStateComp';
import RefComp from './RefComp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StatefullComp/>
    <MyFun/>
    <MyFun1/>
     <StateObj/> */}
     {/* <MapComp/> */}
     {/* <EventsComp/> */}
     {/* <SetStateComp/> */}
     <RefComp/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
