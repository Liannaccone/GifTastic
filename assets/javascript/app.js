

//  VARIABLES
// ====================

	// initial array of items
	var topics = ["dog", "cat", "duck", "deer", "rabbit", "bird"]

//  FUNCTIONS
// =====================

	// function for displaying topics
	function renderButtons() {
		// deletes the content inside #buttons-view to prevent duplication
		$("#button-view").empty();
		// loops through the topics array and generates buttons
		for (var i = 0; i < topics.length; i++) {
			// creates a button assigned to variable topicButton
			var topicButton = $("<button>");
			// adds a class of topic-button to our button
			topicButton.addClass("topic-button btn btn-default");
			// adds button text
			topicButton.text(topics[i]);
			// adds data attribute
			topicButton.attr("data-name", topics[i]);
			// appends utton to #button-view
			$("#button-view").append(topicButton);

		}
	}

	function displayGIFs() { 

		var topic = $(this).attr("data-name");
		var apikey = "cbDcDHxm91GjOwTvRX1Umxbz7MgfTtqi"
		var limit = 10
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key="+ apikey + "&limit=" + limit

		$.ajax({
			url: queryURL,
			method: "GET"
		}).then(function(response){
			console.log(response);
			// assigns the still image url to a variable
			var imageStillURL
			// assigns the animate image url to a variable
			var imageAnimateURL
			 // creats a variable to hold the image
			var topicImage = $("<img>");

			 // assigns still URL to a data-still attribute
			topicImage.attr("data-still", imageStillURL);
			 // assigns animate URL to a data-animate attribute
			topicImage.attr("data-animate", imageStillURL);
			 // assigns still URL to source attribute so thate what displays when appended
			topicImage.attr("src", imageStillURL);
			//  assigns "still" to the created data-state element to note which url is currently in the source position
			topicImage.attr("data-state", "still");
			//  assigns "gif" class
			topicImage.addClass("gif");
			// then apppends the image to the #gif-view
			$("#gif-view").append(topicImage);

		});

	};


// MAIN PROCESS
// =====================
	
	// calling the renderButtons function to display the initial buttons
	renderButtons();



	// listens for user click of #add-topics
	$("#submit-topics").on("click",function(event){
		// 
		event.preventDefault();
		// assigns user input text to a variable
		var userInput = $("#topics-input").val().trim();
		// pushes the userInput to the end of the topics array
		topics.push(userInput);
		// renders the updated array as buttons
		renderButtons();
		// clears the input field
		$("#topics-input").val("");

	});


	// adding click event listeners to all elements with a class .topic-button
	$(".topic-button").on("click", displayGIFs);












