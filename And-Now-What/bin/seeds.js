const mongoose = require('mongoose')
// Call the Celebrity model's create method with the array as argument.
const Celebrity = require('../models/celebrity.model')


const spoonacularAPI = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

fca5115684f049309c7a9cf8dd175018

// Retrieve an access token
spotifyApi
  .clientCredentialsGrant()
  .then((data) => spotifyApi.setAccessToken(data.body["access_token"]))
  .catch((error) =>
    console.log("Something went wrong when retrieving an access token", error)
  );
