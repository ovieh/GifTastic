const apiKey = "&api_key=KHlV8MHHnP1dhzGp6cAMpTGvp3y1uI4h&limit=10";
const url = "http://api.giphy.com/v1/gifs/search?q=";

let topics = ["The Wire", "Arrested Development", "Game of Thrones", "Breaking Bad",
    "The Shield", "Its Always Sunny In Philadelphia", "Mad Men", "Better Call Saul", "The Knick", "Rick and Morty", "True Detective", "Boardwalk Empire"
];

topics.forEach(function (show) {
    let button = $('<button>');
    button.attr({
        class: "btn btn-primary",
        "data-show": show
    });
    // button.data("showName", show);
    button.text(show);
    $('#show-buttons').append(button);

}, this);

$("#show-buttons").on("click", "button", function () {
    $("#image-area").empty();
    let show = $(this).data("show");
    let queryURL = url + show + apiKey;
    $.ajax({
        url: queryURL,
        method: 'GET'

    }).done(function (response) {
        console.log(response);
        let length = response.data.length;



        for (let i = 0; i < length; i++) {

            let img = $("<img class='gifs'>");

            img.attr({
                "src": response.data[i].images.fixed_height_still.url,
                "id": response.data[i].id,
                "alt": show

            });
            $("#image-area").append(img);
            console.log(length);
        }


    });

});

$("#image-area").on("click", ".gifs", function(){
    console.log($(this));
    // console.log("blah");
});
