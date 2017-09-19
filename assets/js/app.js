const apiKey = "&api_key=KHlV8MHHnP1dhzGp6cAMpTGvp3y1uI4h&limit=10";
const url = "http://api.giphy.com/v1/gifs/search?q=";

let topics = ["The Wire", "Arrested Development", "Game of Thrones", "Breaking Bad",
    "The Shield", "Its Always Sunny In Philadelphia", "Mad Men", "Better Call Saul", "The Knick", "Rick and Morty", "True Detective", "Boardwalk Empire"
];

function generateButtons() {
    topics.forEach(function (show) {
        let button = $('<button class="gifs">');
        button.attr({
            class: "btn btn-primary",
            "data-show": show
        });
        // button.data("showName", show);
        button.text(show);
        $('#show-buttons').append(button);

    }, this);
}
generateButtons();

$("#show-buttons").on("click", "button", function () {
    $("#image-area").empty();
    let show = $(this).data("show");
    let queryURL = url + show + apiKey;
    $.ajax({
        url: queryURL,
        method: 'GET'

    }).done(function (response) {
        console.log(response);

        for (let i = 0; i < 10; i++) {
            let ratingInfo = response.data[i].rating;
            let gifWrapper = $("<div class='gif-wrapper'>")
            let img = $("<img>");

            img.attr({
                "src": response.data[i].images.fixed_height_still.url,
                "id": response.data[i].id,
                "alt": show,
                "class": "gifs"

            });
            // cardContent.text("Rating: " + rating);
            let rating = $("<p class='rating'>");
            rating.html("<span class='label'>Rating: </span>" + ratingInfo)

            gifWrapper.append(img);
            gifWrapper.append(rating);
            $("#image-area").append(gifWrapper);
        }


    });

});

$("#image-area").on("click", ".gifs", function () {
    console.log($(this));
    // console.log("blah");
});