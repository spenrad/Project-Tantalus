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

    var zomatoKey = "&apikey=157a4da6ccbad6e7ff675d7496616a8a";
    // this variable is global so it can be populated in get cuisines and used in the restaurant search function
    var cuisineIdArray = [];

    function getCityId(cityName){
        // replace spaces in city name with %20 for zomato
        cityName = cityName.replaceAll(" ", "%20");

        // take user input of a city name and return the city id using zomato cities endpoint
        var queryURL = "https://developers.zomato.com/api/v2.1/cities?q=" + cityName + "&count=1" + zomatoKey;

        $.ajax({
            url: queryURL,
            method: "GET"
          })
            //upon api response
            .then(function(response) {
                console.log(queryURL);
                var id = response.location_suggestions[0].id;
                console.log(id);

                // call getCuisines
                getCuisines(id);

                // return city id
                return id;
            });
    }

    function getCuisines(cityId){
        cuisineIdArray = [];
        // use the id in the cuisines endpoint to get a list of cuisines to populate dropdown
        var queryURL = "https://developers.zomato.com/api/v2.1/cuisines?city_id=" + cityId + zomatoKey;
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function(response){
                var cuisineArray = [];
                for (var i = 0; i < response.cuisines.length; i++){
                    cuisineArray.push(response.cuisines[i].cuisine.cuisine_name);
                    cuisineIdArray.push(response.cuisines[i].cuisine.cuisine_id);
                }

                // function to write cuisines to dropdown should be called here, they should have a data type that represents the id
                //      these are stored in cuisineIdArray (some way to know what the id of the cuisine the user picked is)

                console.log(cuisineArray);
                console.log(cuisineIdArray);
                // return an array of the cuisine types
                return(cuisineArray);
            });
    }   

    function getRestaurants(cityId, cuisineTypeId){
        // array to store restaurant objects
        var restaurantArray = [];
        // using the city id from city selected by the user and cuisineTypeId if one was selected
        //      if no cuisine type entered cuisineType should be 0
        var queryURL = "https://developers.zomato.com/api/v2.1/search?entity_id=" + cityId + "&entity_type=city&count=10";
        if (cuisineTypeId != 0){
            queryURL+= "&cuisines=";
            queryURL += cuisineTypeId;
        }
        queryURL += zomatoKey;

        // use zomato search endpoint and return an array of restaurant objects
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function(response) {
                for (var i = 0; i < 10; i++){
                    var restaurantObject = {
                        // restaurant attributes to store, more can be added later
                        name: response.restaurants[i].restaurant.name,
                        url: response.restaurants[i].restaurant.url,
                        phone: response.restaurants[i].restaurant.phone_numbers
                    };
                    restaurantArray.push(restaurantObject);
                }
                console.log(restaurantArray);
                // the function call for displaying the restaurants should go here
                return restaurantArray;
            });
    }

    
    mealdbKey = "1";

    function randomRecipe() {
        // returns a random recipe object
        var queryURL = "https://www.themealdb.com/api/json/v1/1/random.php";
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function(response){
                var newRecipe = {
                    // recipe attributes to be stored, more can be added later
                    name: response.meals[0].strMeal,
                    url: response.meals[0].strYoutube,
                    img: response.meals[0].strMealThumb,
                    area: response.meals[0].strArea,
                    id: response.meals[0].idMeal
                };
                console.log(newRecipe);
                // function for displaying the recipe should be called here
                return newRecipe;
            });
    }

    function getCategory(){
        // returns an array of recipe categorys
        var queryURL = "https://www.themealdb.com/api/json/v1/1/categories.php";
        var categoryArray = [];
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function(response){
                for (i = 0; i < response.categories.length; i++){
                    categoryArray.push(response.categories[i].strCategory);
                }
                console.log(categoryArray);
                // function to render the categories in the dropdown should be called here
                return categoryArray;
            });


    }

    function getArea(){
        // returns an array of recipe areas
        var queryURL = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
        var areaArray = [];
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function(response){
                for (i = 0; i < response.meals.length; i++){
                    areaArray.push(response.meals[i].strArea);
                }
                console.log(areaArray);
                // function to render the areas in the dropdown should be called here
                return areaArray;
            });
    }

    function ingredientSearch(ingredient){
        // takes an ingredient string from the user and uses mealdb filter by main ingredient
        // store ids in an array (quantity can be decided later)

        // search recipes individually by id and add their information to an object
        // add the object to an array 

        // return an array of recipe objects
    }

    function categorySearch(category){
        // takes a category from the dropdown menu and uses mealdb filter by category
        // store ids in an array (quantity can be decided later)

        // search recipes individually by id and add their information to an object
        // add the object to an array 

        // returns and array of recipe objects
    }

    function areaSearch(area){
        // takes an area from the area dropdown menu and uses mealdb filter by area
        // store ids in an array (quantity can be decided later)

        // search recipes individually by id and add their information to an object
        // add the object to an array 

        // returns an array of recipe objects
    }
    
    
    // getCityId("london");

    // getRestaurants(61,25);
    
    // randomRecipe();

    getCategory();

    getArea();
});