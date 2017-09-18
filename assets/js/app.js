const apiKey = "KHlV8MHHnP1dhzGp6cAMpTGvp3y1uI4h";
const url = "http://api.giphy.com/v1/gifs/search?q=";

let topics = ["The Wire", "Arrested Development", "Game of Thrones", "Breaking Bad",
              "The Shield", "Its Always Sunny In Philadelphia","Mad Men", "Better Call Saul", "The Knick", "Rick and Morty", "True Detective", "Boardwalk Empire"];

topics.forEach(function(show) {
    let button = $('<button>');
    button.attr({
        class: "btn btn-primary"
    });
    button.text(show);
    $('#show-buttons').append(button);
    
}, this);