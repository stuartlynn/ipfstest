import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import IPFS from 'ipfs';


class App extends Component {
  componentWillMount() {
    console.log('triyng to run')
    this.ipfs = new IPFS({
      repo:'datasurvey_test',
      start: true,
      EXPERIMENTAL:{
        pubsub: true
      },
      config: {
        Addresses: {
          Swarm: ['/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star']
        }
      }
    })
    this.ipfs.on('ready', ()=>{
      console.log('ipfs is ready')
    })
    this.ipfs.on('error', (e)=>{
      console.log('error ', e)
    })
  }
  render() {
    return (
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
        </header>
      </div>
    );
  }
}

export default App;
