

//create function to retrieve response data

function recipeResponse (response) {
    for (let i = 0; i < response.data.length; i++)
//create variable to put our results into the DOM
let recipes = "";
//this a container to hold our list items 
    let resultsContainer = $("<div class= 'col-sm-4'></div>");
//set recipeDiv to a list item
    let recipeDiv = $("<img class='img-fluid img-thumbnail' style='width: 100%; height: 100%;'>");
// give the <li> tag a 'src' attribute which is equal to the url
recipeDiv.attr('src', response.data[i].matches.recipeName.imageUrlsBySize);
//append our recipeDiv to the resultsContainer
resultsContainer.append(recipeDiv);
//append resultsContainer to DOM
("").append(resultsContainer);

}