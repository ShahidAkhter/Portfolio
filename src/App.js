import React, { useState, useEffect } from 'react';
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
import LoadingBar from 'react-top-loading-bar'

function App() {
  // eslint-disable-next-line
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const updateView = (index) => {
    setCurrentIndex(index);
    return index;
  };

  const replaceInStr = (str, replacingText, replaceWith) => {
    return str.replace(replacingText, replaceWith);
  }

  useEffect(() => {
    setProgress(100);
    // eslint-disable-next-line
  }, [window.location.pathname]);

  const NAME="ShahidAkhter"
  const NAME_SPACE="Shahid Akhter"
  const FATHER_IN_YOUR_NAME="Dilwar II"
  const SKILL_NAME="Frontend Web Developer"
  const DESCRIPTION="I'm a frontend web developer can build websites with HTML, CSS & JS and most popular library of JavaScript called ReactJS and working on BootstrapCSS and TailwindCSS."
  return (
    <BrowserRouter>
      <LoadingBar
        waitingTime={200}
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <ScrollToTop />
      <Navbar name={NAME}/>
      <Routes>
        <Route path='/' element={<Home updateView={updateView} name={NAME_SPACE} nameByFatherName={FATHER_IN_YOUR_NAME} skillName={SKILL_NAME} description={DESCRIPTION} />} />
        {projectsArray && projectsArray.map((e, i) => (
          <Route
            key={i}
            path={`/Projects/${replaceInStr(e.title, /\s+/g, "_")}_${i + 1}`}
            element={<View index={i} />}
          />
        ))}
        <Route path='/Projects' element={<Projects updateView={updateView} />} />
        <Route path='/View' element={<Projects updateView={updateView} />} />
        <Route
          path='/About'
          element={<About img={logo} name={NAME_SPACE} nameByFatherName={FATHER_IN_YOUR_NAME} skillName={SKILL_NAME} />}
        />
        <Route
          path='/Contact'
          element={<Contact
            img={logo} name={NAME_SPACE} nameByFatherName={FATHER_IN_YOUR_NAME} skillName={SKILL_NAME} description={DESCRIPTION}
          />}
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer name="ShahidAkhter" />
    </BrowserRouter>
  );
}

export default App;