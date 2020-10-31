import { Button } from 'antd';
import React from 'react';
import axios from 'axios';
import logo from "./logo.svg";
import SpotifyWebApi from 'spotify-web-api-js';

const base_url = 'https://accounts.spotify.com/';
const queryString = require('query-string');

const client_id = 'a2904de6730840a199d8f57925d9d68c'; // Your client id
const client_secret = '31713129f3bc4b49b9b47311e90b9ca0'; // Your secret
const redirect_uri = "http://localhost:3000"; // Or Your redirect uri
const s = new SpotifyWebApi();
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
];

const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});

window.location.hash = "";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      token: null
    }
  }
  
  componentDidMount() {
    // Set token
    let _token = hash.access_token;
    if (_token != 'undefined') {
      this.setState({
        token: _token
      });

      s.setAccessToken(_token);
    }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
        {!this.state.token && (
          <Button type="primary" onClick={this.loginWithSpotify}>
          Login with Spotify
          </Button>
        )}
        {this.state.token && (
          <Button type="primary" onClick={this.getUserProfile(this.state.token)}>
          User profile
          </Button>
        )}
        </header>
      </div>
    );
    }
  
    loginWithSpotify() {
      var url = base_url + 'authorize?';
      window.location.href = url +
      queryString.stringify({
        response_type: 'token',
        client_id,
        redirect_uri: redirect_uri,
      });
    }

    getUserProfile(token) {
      console.log("token", token);
    }
  }


export default App;