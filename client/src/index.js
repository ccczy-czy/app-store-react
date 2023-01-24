import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SlideShow from "./pages/SlideShow";

function App() {
  const [paths, setPaths] = useState([]);
  const [title, setTitle] = useState('');
  const match = {'cat': ['/AppA/index.html'], 'face': ['/AppB/index.html'], 'catAndFace': ['/AppA/index.html', '/AppB/index.html']};

  function handleClick(evt) {
      setPaths(match[evt.currentTarget.id]);
      setTitle(evt.currentTarget.id);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home handleClick={handleClick} />}></Route>
        <Route path="home" element={<Home handleClick={handleClick} />}></Route>
        <Route path="slide" element={<SlideShow title={title} paths={paths} />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
