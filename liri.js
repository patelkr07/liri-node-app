require("dotenv").config();

const keys = require("./keys.js");



const ticketmaster = require('ticketmaster');
//ticketmaster('your-api-key').discovery.v2.event.all()
//.then(function)result {
    //"result" is object of Ticketmaster events info
    //}};

const omdb = require('omdb');

const Spotify = require("node-spotify-api");

const moment = require('moment');

const fs = require('fs');

var action = process.argv[2];

processRequest(action);

function processRequest (action) {
    "search-songs"
}






