// import logo from './logo.svg';
import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import SquareInputs from "./Pages/SquareInputs"
import Home from './Home';

function App() {
  return (
<>

{/* 
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div>Hello there</div>
      </header>
    </div> */}

    <div className='page-container'>
      <Routes>
        <Route index element={<Home />} />
        <Route path="pumpuli" element={<SquareInputs target="SALET"/>} />
        <Route path="3Q1uEeH5q" element={<SquareInputs target="OSKAR"/>} />
        <Route path="409KbOytI" element={<SquareInputs target="NBE913"/>} />
        <Route path="0OS7Jjf1h" element={<SquareInputs target="luftkonditioneringsapparat"/>} />
        <Route path="NnC47u6iV" element={<SquareInputs target="godtyckligt"/>} />

        <Route path="r" element={<SquareInputs target="OSKAR"/>} />
        <Route path="g" element={<SquareInputs target="NBE913"/>} />
        <Route path="b" element={<SquareInputs target="luftkonditioneringsapparat"/>} />
        <Route path="y" element={<SquareInputs target="godtyckligt"/>} />

        

      </Routes>
    </div>





    </>
  );
}

export default App;
