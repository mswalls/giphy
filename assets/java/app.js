$(document).ready(function () {

    var topics = [];

    function showgif() {
        

        var bands = $(this).attr("data-name");

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            bands + "&api_key=8QxbDh1kD1kKRWuVSL1ZUXTIJd7gGNkK&limit=10";

        console.log(bands)
       


        $.ajax({
            url: queryURL,
            method: "Get"
        })
            .then(function (response) {
                var results = response.data;
                console.log(results);

                for (var i = 0; i < results.length; i++) {
                    var gifdiv = $("<div>");

                    var p = $("<p>").text("Rating: " + results[i].rating);

                    var gifimg = $("<img>");

                    gifimg.attr("src", results[i].images.fixed_height.url);

                    gifdiv.append(p);
                    gifdiv.append(gifimg);

                    $("#gifs-appear-here").prepend(gifdiv);
                }
            });
    }

    



    $("#addband").on("click", function (event) {
        event.preventDefault();

        var newband = $("#bandsearch").val().trim();
        topics.push(newband);
       
        $("#bandsearch").val();
        renderButtons();
        showgif();
    });

    function renderButtons() {
        $("#searchbuttons").empty();
        for (var i = 0; i < topics.length; i++) {
            var a = $("<button>");
            a.addClass("band-btn");
            a.attr("id", "bandsearch");
            a.attr("data-name", topics[i]);
            a.text(topics[i]);
            $("#searchbuttons").append(a);
        }
    }


$(document).on("click", ".band-btn", showgif);

renderButtons();

})