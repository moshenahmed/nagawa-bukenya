import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <pre>
          <h1 className="App-title">N A G A W A   B U K E N Y A</h1>
            </pre>
        </header>
        <p className="App-intro">
            Nagawa Bukenya is a web application development company based in stockholm sweden, which deals in developing Web Applications in .Net FrameWork and .Net Core.
            <p> We also couple our work with best front end development using react js.</p>
            <p> Our market spans locally here in Sweden, and the whole EU, as well as Africa and the Middle East.</p>
        </p>
          <div className="footer">
              <ul className="sweden">
                  <h3>HEAD OFFICE</h3>
                  <p>
                      Mellanbergsvägen 27, 13546 Tyresö<br/>
                      Stockholm - Sweden<br/>
                      Email: info@nb.se<br/>
                      Call us: +46790256092
                  </p>
              </ul>
              <ul className="uganda">
                  <h3>AFRICA OFFICE</h3>
                  <p>
                      Kasenyi road, P.O BOX 16588 Entebbe<br/>
                      Kampala - Uganda<br/>
                      Email: info@nb.se<br/>
                      Call or Whatsapp: +256704005225
                  </p>
              </ul>
          </div>
      </div>
    );
  }
}

export default App;
