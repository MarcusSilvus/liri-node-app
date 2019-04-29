// js
// dotenv npm installed
require("dotenv").config();

// js
var keys = require("./keys.js");

// js
// spotify npm installed
// var spotify = new Spotify(keys.spotify);

var fs = require("fs");

// axios npm installed
var axios = require("axios");

var liriCmd = process.argv[2];
var userSearch = process.argv.slice(3).join("+");


// Concert-This Search

var concertUrl = "https://rest.bandsintown.com/artists/" + userSearch + "/events?app_id=codingbootcamp";

if (liriCmd === "concert-this") {
  axios.get(concertUrl).then(
    function (response) {
      console.log("\n------------------");
      console.log("\nVenue: " + response.data[6].venue.name);
      console.log("\nCity: " + response.data[6].venue.city);
      console.log("\nState: " + response.data[6].venue.region);
      console.log("\n------------------\n");
    }
  )
}

// Spotify-This-Song Search

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
