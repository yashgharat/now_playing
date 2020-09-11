import React from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

var client_id = 'a2904de6730840a199d8f57925d9d68c'; // Your client id
var client_secret = '31713129f3bc4b49b9b47311e90b9ca0'; // Your secret
var redirect_uri = 'http://localhost:8888/callback'; // Or Your redirect uri

const spotifyApi = new SpotifyWebApi();

class App extends React.Component {
  render () {
    return(
      <div className="App">
        <a href='http://localhost:3000' > Login to Spotify </a>
      </div>
    )
  }
}

export default App;