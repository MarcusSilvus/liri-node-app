// js
// require("dotenv").config();

// js
// var keys = require("./keys.js");

// js
// var spotify = new Spotify(keys.spotify);

var fs = require("fs");


var axios = require("axios");

var liriCmd = process.argv[2];
var movie = process.argv.slice(3).join("+");

// OMDB Search
if (liriCmd === "movie-this") {
  axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&apikey=trilogy").then(
    function (response) {
      console.log("\n------------------");
      console.log("\nTitle: " + response.data.Title, "\nYear Released: " + response.data.Year,
        "\nIMDB Rating: " + response.data.imdbRating, "\nRotten Tomatoes Rating: " + response.data.Ratings[1],
        "\nProduction Location(s): " + response.data.Country, "\nLanguage(s): " + response.data.Language,
        "\nPlot: " + response.data.Plot, "\nStarring: " + response.data.Actors);
      console.log("\n------------------\n");
      // FIXES: Rotten tomatoes rating
      // "Ratings":[{"Source":"Rotten Tomatoes","Value":"82%"}
    }
  );
}
