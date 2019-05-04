require("dotenv").config();

const keys = require("./keys.js");

const spotify = new Spotify(keys.spotify);

var ticketmaster = require('ticketmaster');
//ticketmaster('your-api-key').discovery.v2.event.all()
//.then(function)result {
    //"result" is object of Ticketmaster events info
    //}};

var omdb = require('omdb');

var Spotify = require("node-spotify-api");

var moment = require('moment');




