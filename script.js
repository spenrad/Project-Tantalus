$(document).ready(function () {

// Zomato
    // put in a city
    //      gives list of cuisines
    //          for populating dropdowns

    // put in a city and a cuisine
    //      gives a list of restaurants and info about each one

// MealDB
    // get a random recipe

    // get all recipe categories
    //      for populating dropdowns
    // get all recipe areas
    //      for populating dropdowns

    // put in an ingredient (or list of ingredients if we decide later)
    //      can also put in a category or type
    //          get a list of recipes with those features
    //          get recipe id for more info

    zomatoKey = "157a4da6ccbad6e7ff675d7496616a8a";

    function getCityId(cityName){
        // take user input of a city name and return the city id using zomato cities endpoint

        // return city id
    }

    function getCuisines(cityId){
        // use the id in the cuisines endpoint to get a list of cuisines to populate dropdown

        // return an array of the cuisine types
    }   

    function getRestaurants(cityId, cuisineType){
        // using the city id from city selected by the user and cuisineType if one was selected

        // use zomato search endpoint and return and array of restaurant objects
        //      information will include name, cuisinetype, website url, phone number, maybe pricing?
    }

    
    mealdbKey = "1";

    function randomRecipe() {
        // returns a random recipe object
    }

    function getCategory(){
        // returns an array of recipe categorys
    }

    function getArea(){
        // returns an array of recipe areas
    }

    function ingredientSearch(ingredient){
        // takes an ingredient string from the user and uses mealdb 
    }
});