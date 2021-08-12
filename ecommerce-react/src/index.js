import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from "./components/counter"
import Header from "./components/header"
import Product from "./components/product"
import Carousal from "./components/Carousel"

ReactDOM.render(
  <React.StrictMode>
    <Header/>
<Carousal/>
<Product/>
<Product/>
<Product/>
<Product/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
