import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './component/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
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
      </header>

      <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin />

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossorigin
      />

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin
      />

      <script>var Alert = ReactBootstrap.Alert;</script>
    </div>
  );
}

export default App;
