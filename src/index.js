import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./App.css"
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Root from './Root';
import { Provider } from "react-redux";
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import preloadReducer from "../src/Slices/dataSlice";
import thunk from 'redux-thunk';
const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: {
    preloader: preloadReducer
  },
  middleware: [...getDefaultMiddleware(), thunk],
  
})


root.render(
  <Provider store={store}>
    <BrowserRouter>

      <Root></Root>

    </BrowserRouter>
  </Provider>

);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

