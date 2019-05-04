// js
// dotenv npm installed
require("dotenv").config();

// js
var keys = require("./keys.js");

// js
// spotify npm installed
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);



var fs = require("fs");

// axios npm installed
var axios = require("axios");

// moment nom installed
var moment = require('moment');


var liriCmd = process.argv[2];
var userSearch = process.argv.slice(3).join(" ");


// Concert-This Search

var concertUrl = "https://rest.bandsintown.com/artists/" + userSearch + "/events?app_id=codingbootcamp";

if (liriCmd === "concert-this") {
  axios.get(concertUrl).then(
    function (response) {

      var results = response.data

      for (i = 0; i < results.length; i++) {

        console.log("\n------------------");
        console.log("\n" + userSearch + " show information:");

        console.log(
          "\nEvent Date: " + moment(response.data[i].datetime).format('L'),
          "\nVenue: " + results[i].venue.name,
          "\nCity: " + results[i].venue.city,
          "\nState: " + results[i].venue.region,
          "\nCountry: " + results[i].venue.country);
        console.log("\n------------------\n");
      }
    }
  )
}

// Spotify-This-Song Search

// var spotify = new Spotify(keys.spotify);

if (liriCmd === "spotify-this-song") {


  spotify.search(
    {
      type: 'track',
      query: userSearch
    },
    function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }

      var results = data.tracks.items;
      
      for (i = 0; i < results.length; i++) {
        console.log("\n------------------");
        console.log(
          "\nArtist: " + results[i].artist,
          "\nSong Title: " + results[i].title,
          "\nLink to Song: " + results[i].url,
          "\nAlbum : " + results[i].album);
        console.log();
        console.log("\n------------------\n");

      }
      // console.log(data.tracks);
    });
  // axios.get().then(
  //   function (response) {

  //     var results = response.data

  //     console.log("\n------------------");
  //     console.log(
  //       "\nArtist: " + results.artist,
  //       "\nSong Title: " + results.title,
  //       "\nLink to Song: " + results.url,
  //       "\nAlbum : " + results.album);
  //     console.log();
  //     console.log("\n------------------\n");
  //   }
  // )

}



// Movie-This Search



if (liriCmd === "movie-this") {

  if (userSearch === undefined) {
    userSearch = "mr nobody";
  }

  var movieUrl = "http://www.omdbapi.com/?t=" + userSearch + "&y=&apikey=trilogy";

  axios.get(movieUrl).then(
    function (response) {

      var results = response.data

      console.log("\n------------------");
      console.log(
        "\nTitle: " + results.Title,
        "\nYear Released: " + results.Year,
        "\nIMDB Rating: " + results.imdbRating,
        "\nRotten Tomatoes Rating: " + results.Ratings[1].Value,
        "\nProduction Location(s): " + results.Country,
        "\nLanguage(s): " + results.Language,
        "\nPlot: " + results.Plot,
        "\nStarring: " + results.Actors);
      console.log("\n------------------\n");
    }
  )
}

// Do-What-It-Says Search
