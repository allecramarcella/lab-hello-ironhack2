import React from 'react';
import logo from './ironhack-logo.svg';
import menu from './menu-top.svg'
import iconDeclarative from './icon1.png'
import iconComponents from './icon2.png'
import iconSingleWay from './icon3.png'
import iconJSX from './icon4.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className='App-nav'>
           <img src={logo} className="App-logo" alt="logo" />
           <img src={menu} alt="menu-top"></img>
        </nav>
        
        <div>
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use <br></br>the most popular frontend library, <br></br>and become a super Ninja developer.</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Awesome!
          </a>
        </div>
      </header>
      <div className='Features'>
        <div>
          <img src={iconDeclarative} alt="icon Declarative"></img>
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
          <img src={iconComponents} alt="icon Components"></img>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
          <img src={iconSingleWay} alt="icon Single-Way" ></img>
          <h2>Single-way</h2>
          <p>A set of immutable valuesare passed to the components.</p>
        </div>
        <div>
          <img src={iconJSX} alt="icon JSX"></img>
          <h2>JSX</h2>
          <p>Statically-typed designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
