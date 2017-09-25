(function () {

    let topics = ["Arrested Development", "Game of Thrones", "Breaking Bad",
        "The Wire", "Its Always Sunny In Philadelphia", "Mad Men", "Better Call Saul", "The Knick", "Rick and Morty",
         "True Detective", "Boardwalk Empire", "Mash", "Seinfield"
    ];
    let gifPlayState = false;

    let generateButtons = () => {
        $("#show-buttons").empty();
        topics.forEach(function (show) {
            let button = $('<button class="gifs">');
            button.attr({
                class: "btn btn-primary",
                "data-show": show
            });
            button.text(show);
            $('#show-buttons').append(button);

        }, this);
    }
    generateButtons();

    $("#show-buttons").on("click", "button", function () {
        $("#image-area").empty();
        const apiKey = "&api_key=KHlV8MHHnP1dhzGp6cAMpTGvp3y1uI4h&limit=10";
        const url = "http://api.giphy.com/v1/gifs/search?q=";
        let show = $(this).data("show");
        let queryURL = url + show + apiKey;

        $.ajax({
            url: queryURL,
            method: 'GET'

        }).done(function (response) {
            console.log(response);

            for (let i = 0; i < 10; i++) {
                let ratingInfo = response.data[i].rating;
                let sourceStill = response.data[i].images.fixed_height_still.url;
                let sourceGif = response.data[i].images.fixed_height.url;
                let gifWrapper = $("<div class='gif-wrapper'>")
                let img = $("<img>");

                img.attr({
                    "src": sourceStill,
                    "data-still": sourceStill,
                    "data-gif": sourceGif,
                    "alt": show,
                    "class": "gifs"
                });

                let rating = $("<p class='rating'>");
                rating.html("<span class='label'>Rating: </span>" + ratingInfo)

                gifWrapper.append(img);
                gifWrapper.append(rating);
                $("#image-area").append(gifWrapper);
            }


        });

    });

    $("#image-area").on("click", ".gifs", function () {
        console.log($(this).attr("id"));
        if (!gifPlayState) {
            $(this).attr("src", $(this).data("gif"));
            gifPlayState = true;
        } else if (gifPlayState) {
            $(this).attr("src", $(this).data("still"));
            gifPlayState = false;
        }
        console.log(gifPlayState);
    });

    $("#add-show").on("click", function (event) {
        event.preventDefault();

        let show = $("#tvshow-input").val().trim();

        topics.push(show);
        generateButtons();
    });
}()); //IIFE