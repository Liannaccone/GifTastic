

//  VARIABLES
// ====================

	// initial array of items
	var topics = ["dog", "chukkar", "duck", "deer", "rabbit", "dove"]

//  FUNCTIONS
// =====================

	// function for displaying topics
	function renderButtons() {
		// deletes the content inside #buttons-view to prevent duplication
		$("#button-view").empty();
		// loops through the topics array and generates buttons
		for (var i = 0; i < topics.length; i++) {
			$("#button-view").append("<button class='topic-button'>" + topics[i] + "</button>");
		}
	}


// MAIN PROCESS
// =====================

renderButtons();