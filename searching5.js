function searchGames() {
    // Get the search input element
    var input = document.querySelector('.search-txt');
    // Get the game cards
    var gameCards = document.querySelectorAll('.swiper-slide');
    // Get the element where you want to display the "No results found" message
    var noResultsMessage = document.querySelector('.no-results-message');
    // Get the copyright div
    var copyrightDiv = document.querySelector('.copyright.container');
    
    // Get all trending sections (including the main one)
    var trendingSections = document.querySelectorAll('.trending.container');

    // Convert the search input value to lowercase for case-insensitive search
    var searchTerm = input.value.toLowerCase();

    var resultsFound = false; // Flag to track if any results were found

    // Loop through all game cards
    gameCards.forEach(function(card) {
        var title = card.querySelector('h2').textContent.toLowerCase(); // Get the game title

        // Check if the game title contains the search term
        if (title.includes(searchTerm)) {
            card.style.display = 'block'; // Show the card if it matches the search term
            resultsFound = true; // Set the flag to true since a result was found
        } else {
            card.style.display = 'none'; // Hide the card if it doesn't match
        }

        // Check if the card contains an <a> element with href="io.html" and hide it if necessary
        var ioLink = card.querySelector('a[href="io.html"]');
        if (ioLink) {
            ioLink.style.display = 'none';
        }
    });

    // Reset the category title and make all other categories not visible
    trendingSections.forEach(function(section, index) {
        if (index === 0) {
            // Main trending section
            if (resultsFound) {
                section.querySelector('h2').textContent = 'Search Results'; // Change category title
                section.style.display = 'block'; // Show the main section if results were found
            } else {
                section.querySelector('h2').textContent = 'IO Games'; // Reset category title
                section.style.display = 'block'; // Show the main section if no results found
            }
        } else {
            // Other trending sections
            var sectionTitle = section.querySelector('h2').textContent.toLowerCase();
            if (sectionTitle.includes(searchTerm)) {
                section.querySelector('h2').textContent = 'Search Results';
                section.style.display = 'block';
            } else {
                section.style.display = 'none'; // Hide other categories
            }
        }
    });

    // Hide the <a> elements with class "view-more" if no results were found
    var viewMoreLinks = document.querySelectorAll('.view-more a');
    viewMoreLinks.forEach(function(link) {
        if (!resultsFound) {
            link.style.display = 'none';
        } else {
            link.style.display = 'block';
        }
    });

    // Hide the pagination if there is text in the search input
    var pagination = document.querySelector('.pagination');
    if (input.value.length > 0) {
        pagination.style.display = 'none';
    } else {
        pagination.style.display = 'block';
    }

    // Hide or show the "No results found" message and copyright div based on the flag
    if (resultsFound) {
        noResultsMessage.style.display = 'none'; // Hide the message if results were found
        copyrightDiv.style.display = 'none'; // Hide the copyright div if results were found
    } else {
        noResultsMessage.style.display = 'block'; // Show the message if no results were found
        copyrightDiv.style.display = 'block'; // Show the copyright div if no results were found
    }
}

// Add an event listener to the search input
var searchInput = document.querySelector('.search-txt');
searchInput.addEventListener('input', searchGames);

// Initially, hide the "No results found" message and copyright div
var noResultsMessage = document.querySelector('.no-results-message');
var copyrightDiv = document.querySelector('.copyright.container');
noResultsMessage.style.display = 'none';
copyrightDiv.style.display = 'none';