import React, { useState } from 'react'
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import View from './components/View';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './components/Projects';
import { projectsArray } from './JSONArray/projectsArr'

function App() {
  // eslint-disable-next-line
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateView = (index) => {
    setCurrentIndex(index);
    return index;
  };
  const replaceInStr = (str, replacingText, replaceWith) => {
    return str.replace(replacingText, replaceWith);
  }
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar name="ShahidAkhter" />
        <Routes>
          <Route path='/' element={<Home updateView={updateView} />} />
          {projectsArray && projectsArray.map((e, i) => {
            let projectURL = replaceInStr(e.title, /\s+/g, "_");
            return <Route path={`/Projects/${projectURL}_${i+1}`} element={<View index={i}/>}  key={i}/>
          })}
          <Route path='/Projects' element={<Projects updateView={updateView} />} />
          <Route path='/view' element={<Projects updateView={updateView} />} />
        </Routes>
        <Footer name="ShahidAkhter" />
      </BrowserRouter>
    </>
  );
}

export default App;
