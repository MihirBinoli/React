import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import { Gallery } from './component/Gallery';
// import Jul24 from './component/Jul24';
// import Demo22 from './component/Demo22';
// import InlineCSS from './component/InlineCSS';
// import Product from './component/Product';
// import ProductClass from './component/ProductClas';
// import RouteConfig from './component/RouteConfig';
// import { Outlet } from 'react-router-dom';
// import CounterComp from './component/CounterComp';
// import LikeCopy from './component/LikeCopy';
// import Display from './component/Eval';
// import FirstComponent from './component/FirstComponent';
import RouteConfig from './component/RouteConfig';

const root = ReactDOM.createRoot(document.getElementById('root'));
//let m =["image/pushups.gif","image/bicepsImg.jpeg"];
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FirstComponent/>
    <FirstComponent/>
    <demo />
    <FirstComponent/>
    <FirstComponent/>

    <Gallery url={m[0]}/>
    <Gallery url={m[1]}/> */}
    {/* <InlineCSS/>
    <Demo22/>
    <Jul24/> */}
    <RouteConfig/>
  {/* <div className='container'>
    <div className='row'>
      <RouteConfig /> 
    </div>
    <Outlet/>
  </div> */}
{/* <div>
  <Display/>
</div>


<div>
  <CounterComp count="122" name="Mihir"/>
</div>


  <div>
    <LikeCopy count ="101" />
  </div> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
