import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <pre>
          <h1 className="App-title">N A G A W A   B U K E N Y A</h1>
            </pre>
        </header>
        <p className="App-intro">
            Confidently and securely  develop sustainable solutions based on our clients needs as we bring out the clear business logic and enhance performance.
            <p>We offer backend, front end and full stack tailored solutions and focus is put on the clients objective until achieved</p>
            <p>Our clients enjoy affordable sustainable services coupled with all time technical support.</p>
        </p>
          <div className="footer">
              <div className="sweden">
                  <h3>HEAD OFFICE</h3>
                  <p>
                      Mellanbergsvägen 27, 13546 Tyresö<br/>
                      Stockholm - Sweden<br/>
                      Email: info@nb.se<br/>
                      Call us: +46790256092
                  </p>
              </div>
              <div className="uganda">
                  <p>
                      <h3>AFRICA OFFICE</h3>
                      Plot 521, Kasenyi road, Nkumba<br/>
                      P.O BOX 16588 Entebbe<br/>
                      Kampala - Uganda<br/>
                      Email: info@nb.se<br/>
                      Tel: +256782163203, Whatsapp: +256704005225
                  </p>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
