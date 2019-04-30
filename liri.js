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

      var date = moment(response.data[4].datetime).format('L');

      console.log("\n------------------");
      console.log("\n" + userSearch + " show information:");

      console.log(
        "\nEvent Date: " + date,
        "\nVenue: " + response.data[6].venue.name,
        "\nCity: " + response.data[6].venue.city,
        "\nState: " + response.data[6].venue.region,
        "\nCountry: " + response.data[6].venue.country);
      console.log("\n------------------\n");
    }
  )
}

// Spotify-This-Song Search

// var spotify = new Spotify(keys.spotify);

if (liriCmd === "spotify-this-song") {
  

  spotify.search({ type: 'track', query: userSearch }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    console.log(data.tracks);
  });
  //   axios.get().then(
  //     function (response) {

  //       console.log("\n------------------");
  //       console.log();

  //       console.log();
  //       console.log("\n------------------\n");
  //     }
  //   )

}



// Movie-This Search



if (liriCmd === "movie-this") {

  if (userSearch === undefined) {
    userSearch = "mr nobody";
  }

  var movieUrl = "http://www.omdbapi.com/?t=" + userSearch + "&y=&apikey=trilogy";

  axios.get(movieUrl).then(
    function (response) {
      console.log("\n------------------");
      console.log(
        "\nTitle: " + response.data.Title,
        "\nYear Released: " + response.data.Year,
        "\nIMDB Rating: " + response.data.imdbRating,
        "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value,
        "\nProduction Location(s): " + response.data.Country,
        "\nLanguage(s): " + response.data.Language,
        "\nPlot: " + response.data.Plot,
        "\nStarring: " + response.data.Actors);
      console.log("\n------------------\n");
    }
  )
}

// Do-What-It-Says Search
