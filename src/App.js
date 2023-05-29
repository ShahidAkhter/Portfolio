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
import About from './components/About';
import Contact from './components/Contact';
import logo from './logo.jpg';
import Page404 from './components/Page404';

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
            return <Route path={`/Projects/${replaceInStr(e.title, /\s+/g, "_")}_${i + 1}`} element={<View index={i} />} key={i} />
          })}
          <Route path='/Projects' element={<Projects updateView={updateView} />} />
          <Route path='/View' element={<Projects updateView={updateView} />} />
          <Route path='/About' element={<About
            img={logo}
            name="Shahid Akhter"
            nameByFatherName="Dilwar II"
            skillName="Frontend Web Developer"
          />} />
          <Route path='/Contact' element={<Contact
            img={logo}
            name="Shahid Akhter"
            nameByFatherName="Dilwar II"
            skillName="Frontend Web Developer"
            description="I'm a frontend web developer can build websites with HTML, CSS & JS and most popular library of JavaScript called ReactJS and working on BootrapCSS and TailwindCSS."
          />} />
          <Route path="*" element={<Page404/>} />
        </Routes>
        <Footer name="ShahidAkhter" />
      </BrowserRouter>
    </>
  );
}

export default App;
