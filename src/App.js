
import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import NewsComponent from "./components/NewsComponent";
import { createRoot } from "react-dom/client";
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {

  const[progress, setProgress] = useState(0);

  // state = {
  //   progress: 0
  // }

  let apiKey = process.env.REACT_APP_NEWS_API;

  // constructor(props) {
  //   super(props);
  //   // Log the apiKey in the constructor
  //   console.log("API Key:", this.apiKey);
  // }

  const updateProgress = (prog) => {
    setProgress(prog);
  }

  return (
    <div className="App">
      <Router>
        {/* #ffc107 - text-warning color code*/}
        <Navbar title="NewsDaily" />
        <LoadingBar color='black' height={3} progress={progress} />
        <Routes>
          <Route exact path="/" element={<NewsComponent apiKey={apiKey} updateProgress={updateProgress} key="home" pageSize={11} country="in" category="general" />}></Route>
          <Route exact path="/business" element={<NewsComponent apiKey={apiKey} updateProgress={updateProgress} key="businerr" pageSize={11} country="in" category="business" />}></Route>
          <Route exact path="/entertainment" element={<NewsComponent apiKey={apiKey} updateProgress={updateProgress} key="entertainment" pageSize={11} country="in" category="entertainment" />}></Route>
          <Route exact path="/general" element={<NewsComponent apiKey={apiKey} updateProgress={updateProgress} key="general" pageSize={11} country="in" category="general" />}></Route>
          <Route exact path="/health" element={<NewsComponent apiKey={apiKey} updateProgress={updateProgress} key="health" pageSize={11} country="in" category="health" />}></Route>
          <Route exact path="/science" element={<NewsComponent apiKey={apiKey} updateProgress={updateProgress} key="science" pageSize={11} country="in" category="science" />}></Route>
          <Route exact path="/sports" element={<NewsComponent apiKey={apiKey} updateProgress={updateProgress} key="sports" pageSize={11} country="in" category="sports" />}></Route>
          <Route exact path="/technology" element={<NewsComponent apiKey={apiKey} updateProgress={updateProgress} key="technology" pageSize={11} country="in" category="technology" />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
