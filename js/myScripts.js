//-*-*-*-*-*-*-*-* Function to hide and show top menu on scroll -*-*-*-*-*-*-*-*//
//we add some important variables here
var tapped = false //checks if menu us tapped
var mediaWidth = 770 //media value for media query



//Code to Show and Hide Nav Menu
//Code found, modified and adpated from https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
var prevScrollpos = window.pageYOffset;
window.addEventListener("scroll", function HideTopMenu() {
    var header = document.getElementById("header")
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) { //if scrolling down make menu visible
        header.style.top = "0"
        if (tapped) { //makes menu visible if tapped with finger otherwise it's visible only when hovered
            $("#nav-menu").removeClass("invisible")
        }
    } else if (prevScrollpos < currentScrollPos) { //if scrolling up make menu invisible
        header.style.top = "-96px"
        if ($(window).width() <= mediaWidth) {
            $("#nav-menu").addClass("invisible")
        }

    }
    prevScrollpos = currentScrollPos //store latest pageYOffset
})

//Code to show and hide navigation menu on mobile devices
$(document).ready(function () {

    document.getElementById("button-menu").addEventListener("touchstart", function () {//adds touch listener to navigation menu
        if ($("#nav-menu").hasClass("invisible")) {//if navmenu is not visible on tap make it visible
            $("#nav-menu").removeClass("invisible")
            $("#button-menu").css({ "background-color": "rgba(70, 70, 70)", "transition": "0.25s" })
            tapped = true
            $("#nav-menu").fadeIn()
        } else if ($("#nav-menu").css("display") == "block") {//on tap make it invisible
            $("#nav-menu").addClass("invisible")
            $("#button-menu").css({ "background-color": "rgba(255, 70, 70)", "transition": "0.25s" })
            tapped = false
        }
    })

    $("#logo").click(function () { window.location = "index.html" }) //click on logo to go back to home

    //screen adjustment code
    screenWidth = $(window).width() + 17 //+17 is to take in consideration the scroll bar
    if (screenWidth <= mediaWidth) { //if screen width is smaller than 770 when loading the page, hide the menu and make menu button visible
        $("#nav-menu").addClass("invisible")
        $("#nav-menu a").addClass("dark-li")
        MouseOverFunc()//activates the make visible on hover function
    }
})

function MouseOverFunc() {//make nav menu visible when hoverin over the menu button

    $("#drop-down").mouseover(function () { //on mouse over make visible and change button background
        $("#nav-menu").removeClass("invisible")
        $("#button-menu").css({ "background-color": "rgba(70, 70, 70)", "transition": "0.25s" })
    })
    $("#drop-down").mouseout(function () { //on mouse out make invisible and change button background
        $("#nav-menu").addClass("invisible")
        $("#button-menu").css({ "background-color": "rgba(255, 70, 70)", "transition": "0.25s" })
    })

}

$(window).resize(function () {//adds and removes the dropdown menu when changing the screen size for responsivness
    screenWidth = $(window).width() + 17
    $("#drop-down").off() //resets the listener so that ti doesn't bug when chagning screen resolution
    if (screenWidth <= mediaWidth) {//if smaller than 770px hide nav-menu
        $("#nav-menu").addClass("invisible")
        $("#nav-menu a").addClass("dark-li")
        MouseOverFunc() //mouse over will make nav-menu visible on mouse over
    }
    if (screenWidth > mediaWidth) { //if greater than 770px nav-menu will be visible
        $("#nav-menu").removeClass("invisible")
        $("#nav-menu a").removeClass("dark-li")
    }
})

//function to search and Show only the Recipes we want to see
function SearchBar() {
    var recipeList = []; //will store list of recipes on page
    var ingList = [] //will store lists of ingredients for each recipe
    var searchBar = document.getElementById("search-bar"); //get searchbar id



    function CheckFilter() {
        //searchBar.value = ""
        selection = $('#filter-menu option:selected').val()//gets value selected in the dropdown selection in the serachbar
        if (selection == "recipe_name") { //run function if selection is recipe name
            SearchByRecipeName()
        } else if (selection == "ingredients") { //run function if selection is ingredients
            SearchByIngredients()
        }
    }

    CheckFilter()

    $('#filter-menu').on('change', function () {//change function if value in the filter-menu changes
        CheckFilter()
    })

    function SearchByRecipeName() {//searches thorugh the recipe cards and show only the recipe cards that have the same title as what is written in the search bar
        searched_val = document.getElementsByClassName("recipe-title-h2");//get all classes recipe-title-h2
        for (var i = 0; i < searched_val.length; i++) { //for loop to loop through each element with that class
            var recipeName = searched_val[i].innerHTML; //Get inner html of h3
            recipeName = recipeName.toLowerCase(); //make it lower case to avoid case sensitive issues
            recipeList.push(recipeName); //push into the recipeList array
        }


        searchBar.addEventListener('keyup', function () { //add listener to search bar
            var text = searchBar.value; //gets value in the search bar
            text = text.toLowerCase(); //makes value lowercase to avoid 
            for (var i = 0; i < searched_val.length; i++) { //scroll through all classes h3
                var element = $(searched_val[i]).closest(".bakery")//this is to select the correct card to show or hide
                if (element.length == 0) {
                    element = $(searched_val[i]).closest(".recipe")//if .bakery is not present use .recipe
                }
                if (recipeList[i].indexOf(text) < 0) {  //hide cards that do not have title equal to search bar            
                    element.css("display", "none");
                } else {
                    element.css("display", "block") //keep card visible
                }
            }
        })
    }

    function SearchByIngredients() {//searches through the recipe cards and shows only the recipe cards that have the same ingirident as written in the search bar
        var all_ingredients_list = document.getElementsByClassName("ingredients-list");//get all the elements that calss ingredient-list
        searchBar.addEventListener('keyup', function () { //when removing your finger from the keyboard
            var text = searchBar.value; //gets value in the search bar
            text = text.toLowerCase(); //makes value lowercase
            for (var eachCard = 0; eachCard < all_ingredients_list.length; eachCard++) {
                var UL = all_ingredients_list[eachCard].getElementsByTagName("UL")[0] //get the first and only ul of each card
                var present = 0
                //get all li
                ingli = UL.getElementsByTagName("li") //get all li in that UL

                ingList = []

                for (j = 0; j < ingli.length; j++) { //crate array of all ingredients of card1
                    var ingName = ingli[j].innerHTML
                    ingName = ingName.toLowerCase()
                    ingList.push(ingName)

                }
                //console.log(ingList);

                for (y = 0; y < ingList.length; y++) {//check for value
                    if (ingList[y].indexOf(text) > 0) {  //checks id any part of the string contains text in the search bar              
                        //console.log(ingList[y]);
                        present++
                    }
                }
                //hide element that is not present
                var element = $(UL).closest(".bakery")
                if (element.length == 0) {
                    element = $(UL).closest(".recipe")//if .bakery is not present use .recipe
                }
                if (present < 1 && text != "") {
                    element.css("display", "none")//hide elements that have 0 occurences of what's written in search bar
                } else {
                    element.css("display", "block")
                }
                //var element = $(UL[i]).closest(".bakery")
                //element.css("display","none")

            }
        })
    }
    //creates a list of all the cards h3
    /*;*/
}


//-*-*-*-*-*-*-*-* CODE TO CREATE BREADCRUMB -*-*-*-*-*-*-*-*//
//this functions leaves stores a value in sessionStorage so that the user can see which page he is currently at

function addCrumb() {//adds a crumb stored in session Storage so that we can load the right page
    var page = window.location.pathname.split("/").pop().split(".") //split url
    page = page[0] //get first element of splited url
    if (page == "") { //if there is no page .html then set crumb to index
        page = "index"
    }
    sessionStorage.setItem("Crumb", page)//store page value in session storage with key Crumb
    let crumb = sessionStorage.getItem("Crumb")
    $("#" + crumb).css("border-bottom", "solid 2px rgba(255, 70, 70)")//underline the top of navigation menu so that you always know which page you are in
}

//-*-*-*-*-*-*-*-* Change Light and Dark Mode for accessibility -*-*-*-*-*-*-*-*//

function LightDark() {//adds a class to various elements 
    let mode = sessionStorage.getItem("Mode")//gets the value of the Key called MAode from session storage
    if (mode == "dark") {
        $("body").addClass("darkmode")
        $("header").addClass("darkHeader")
        $("a").addClass("darkModeText")
        $(".recipe, .bakery").addClass("darkHeader")
        $(".after-description").addClass("dark-after-description")
        $("#dark-mode").css("height", "24px")
        $("#light-mode").css("height", "16px")

    }
    if (mode == "light") {//removes the darker class from various elements
        $("body").removeClass("darkmode")
        $("header").removeClass("darkHeader")
        $("a").removeClass("darkModeText")
        $(".recipe, .bakery").removeClass("darkHeader")
        $(".after-description").removeClass("dark-after-description")
        $("#light-mode").css("height", "24px")
        $("#dark-mode").css("height", "16px")
    }


}


//-*-*-*-*-*-*-*-* CODE TO LOAD APPROPRIATE CONTENT AFTER DOM LOADED -*-*-*-*-*-*-*-*//

window.addEventListener("DOMContentLoaded", function () {
    addCrumb()
    let lang = sessionStorage.getItem("Lang") //get the value of the Lang Key from the sessionStorage
    let crumb = sessionStorage.getItem("Crumb") //get the value of the Crumb Key from sessionStorage
    if (lang === null) { //if the lang is null this means the page is has never been loaded before and user is riderected to index.html
        if (crumb != "index") {
            window.location.replace("index.html")
        }
        sessionStorage.setItem("Lang", "ENG")//sets language to english
        sessionStorage.setItem("Mode", "light")//sets the view of the website to light mode
        lang = sessionStorage.getItem("Lang")
        crumb = sessionStorage.getItem("Crumb")
    }

    if (lang == "ITA") { //if lang is italian compile italian
        PopulateMenu(NavMenuIta)//change language of the navigation menu to italian
        if (crumb == "index") {
            PopulateIndex(LatestITA, lang, 4) //compile for index-html only
        } else if (crumb == "starters") {
            PopulateRecipes(StartersITA, lang) //fill pages with starters recipes in italian
        } else if (crumb == "bakery") {
            PopulateBakery(BakeryITA, lang) //fill pages with bakery recipes in italian
        } else if (crumb == "maindishes") {
            PopulateRecipes(MainsITA, lang) //fill pages with main dishes recipes in italian
        } else if (crumb == "desserts") {
            PopulateDesserts(DessertITA, lang) //fill pages with desserts recipes in italian
        }
        //below code will change the language of carious elements in the page to italian
        $(".footer-info-box h3:first-child").text("Trovateci Anche Su")
        $(".search-items h3").text("Filtra per")
        $("#filter-menu option:first-child").text("Nome Ricetta")
        $("#filter-menu option:nth-child(2)").text("Ingredienti")
        $("#search-bar").attr("placeholder", "ricerca...")

    }
    if (lang == "ENG") {//if lang is in english compile in English
        PopulateMenu(NavMenuEng) //change language of the navigation menu to english
        if (crumb == "index") { //compile for index.html only
            PopulateIndex(LatestENG, lang, 4)
        } else if (crumb == "starters") {
            PopulateRecipes(StartersENG, lang) //fill pages with starter recipes in english
        } else if (crumb == "bakery") {
            PopulateBakery(BakeryENG, lang) //fill pages with bakery recipes in english
        } else if (crumb == "maindishes") {
            PopulateRecipes(MainsENG, lang) //fill pages with main dishes recipes in english
        } else if (crumb == "desserts") {
            PopulateDesserts(DessertENG, lang) //fill pages with desserts recipes in english
        }
        //below code will change the language of carious elements in the page to english
        $(".footer-info-box h3:first-child").text("Find us Also Here")
        $(".search-items h3").text("Search by")
        $("#filter-menu option:first-child").text("Recipe Name")
        $("#filter-menu option:nth-child(2)").text("Ingredients")
        $("#search-bar").attr("placeholder", "Search for...")
    }



    $("#dark-mode").click(function () {//button to change the website to darkmode

        sessionStorage.setItem("Mode", "dark")//change session storage so that when we change page it will stay in dark mode
        LightDark()
    })

    $("#light-mode").click(function () { //button to change the website to lightmode

        sessionStorage.setItem("Mode", "light")//change session storage so that when we change page it will stay in light mode
        LightDark()
    })

    LightDark() //by default the website will load in light mode
    addCrumb()
    ShowHide()//starts the eventlisteners for the recipe cards after they have been loaded
    if (crumb == "desserts") { RecipeCarousel() } //starts the recipe carousel after all cards have been loaded if we are in desserts.html
    if (crumb != "index") { SearchBar() } //starts the SearchBar function if we are not in the index page
})

$("#lang-ita").click(function () { //button to change language of the website to italian
    sessionStorage.setItem("Lang", "ITA")
    location.reload()
})
$("#lang-eng").click(function () {//button to change language of the website to english
    sessionStorage.setItem("Lang", "ENG")
    location.reload()
})


//-*-*-*-*-*-*-*-* CODE TO SHOW AND HIDE RECIPES -*-*-*-*-*-*-*-*//

function ShowHide() {
    var des_pos //position of our recipe carousel

    $(".recipe").click(function GetElementInfo(e) {//function to show expand and collapse recipe cards
        var recipeId = $(e.target).closest(".recipe") //.closest will navigate up through the parents and find the first item that sattisfies the request 
        var clickClass = e.target.className
        if (clickClass == "close-recipe") {
            //recipeId = e.target.parentNode.parentNode.parentNode.id   //---Old Code---Vanilla Javascript---//  /
            hide(recipeId)
        } else {
            show(recipeId)
        }

        function show(recipe) {//expands the recipe div and shows more detail for the recipe
            recipe.removeClass("hover-class")
            recipe.find(".recipe-main-content").css({ "max-height": "2000px", "padding": "16px" })
            recipe.find(".close-recipe").css("display", "block")
            recipe.find(".recipe-thumbnail").css({ "height": "0", "width": "0", "min-height": "0" })
        }
        function hide(recipe) {//collpases recipe div to card state
            recipe.addClass("hover-class")
            recipe.find(".recipe-main-content").css({ "max-height": "0px", "padding": "0px" })
            recipe.find(".close-recipe").css("display", "none")
            recipe.find(".recipe-thumbnail").css({ "width": "auto", "min-height": "187px", "height": "auto" })
        }
    })

    $(".bakery").click(function GetElementInfo(e) {//listener to expand and hide recipe cards
        let clickClass = e.target.className
        let recipeId = $(e.target).closest(".bakery")
        let dessert_templateID = $("#desserts-template-container") //for recipe carousel only
        let buttons = $(".prev, .next") //these are for the recipe carousel only
        //.closest will navigate up through the parents and find the first item that sattisfies the request 
        if (clickClass == "recipe-description-p" || clickClass == "recipe-title-h2") {
            //recipeId = e.target.parentNode.parentNode.parentNode.parentNode.id    //---Old Code---Vanilla Javascript---//  

            show(recipeId)
        } else if (clickClass == "bakery-thumbnail") {
            //recipeId = e.target.parentNode.parentNode.id  //---Old Code---Vanilla Javascript---//  
            show(recipeId)
        } else if (clickClass == "close-recipe") {
            //recipeId = e.target.parentNode.parentNode.parentNode.id   //---Old Code---Vanilla Javascript---//  /
            hide(recipeId)
        }

        function show(recipe) { //expands clicked card and makes all other recipes hidden
            des_pos = parseFloat(dessert_templateID.css("left"))
            buttons.css("display", "none") //hides carousel buttons after cliccking on recipe card
            dessert_templateID.css({ "left": "0px", "transition": "none" })
            recipe.removeClass("hover-class")
            recipe.css({ "height": "auto" })
            recipe.removeClass("bakMaxWidth")
            recipe.find(".recipe-main-content").css({ "max-height": "2000px", "padding": "16px" })
            //.find will find the class that we are looking for among the children inside the div with id #recipeId
            recipe.find(".close-recipe").css("display", "block")
            recipe.find(".recipe-thumbnail").css("max-height", "100px")
            recipe.find(".bakery-main-content").css("display", "block")
            recipe.find(".after-description").css("display", "none")
            $(".bakery").not(recipe).hide()//hides all recipes that are not the clicked recipe card
        }
        function hide(recipe) {
            buttons.css("display", "block")
            dessert_templateID.css({ "left": des_pos + "px", "transition": "0.5s ease" })
            recipe.addClass("hover-class")
            recipe.addClass("bakMaxWidth")
            //.find will find the class that we are looking for among the children inside the div with id #recipeId
            recipe.find(".close-recipe").hide()
            //recipe.find(".recipe-thumbnail").css("min-width", "240px")
            recipe.find(".recipe-description-p").css("width", "auto")
            recipe.find(".bakery-main-content").hide()
            recipe.find(".after-description").css("display", "block")
            //recipe.css("transtion","0")
            $(".bakery").not(recipe).show()//makes all recipe cards visible again
        }
    })
}

//Navigation Menu Options Below
var NavMenuEng = ["HOME", "STARTERS & SIDES", "MAINS", "BAKERY", "DESSERTS"] //array of navigation button in english
var NavMenuIta = ["HOME", "ANTIPASTI E CONTORNI", "PRINCIPALI", "LIEVITATI", "DESSERT"] //array of navigation buttons in italian
var NavLinks = ["index", "starters", "maindishes", "bakery", "desserts"] //array with the names of the pages to add as href in future functions

//function to change the language of the Menu
function PopulateMenu(MenuLang) {//function to add the buttons of the navigation menu according to the langiage selected
    var navContainer = document.getElementById("nav-menu") //get the navigation menu
    var ul = document.createElement("ul")
    ul.setAttribute("class", "nav-menu") //this is creates the ul for the navigatio nmenu

    for (var i = 0; i < MenuLang.length; i++) {//loop to populate ul tag with li tags
        var li = document.createElement("li")
        var a = document.createElement("a")
        a.setAttribute("id", NavLinks[i]) //set id from NavLinks array ex index
        a.setAttribute("href", NavLinks[i] + ".html") //set href from Nalinks array ex index.html
        a.setAttribute("class", "nav-menu-a-tags")
        a.innerText = MenuLang[i] //set inner text of a tag to the language selected ex MAIN DISHES or PRINCIPALI
        li.appendChild(a)
        ul.appendChild(li)
    }
    navContainer.appendChild(ul) // appends the navigaion list to the header
    //change language of various elements of the DOM depending on language choice

}
//function that creates the div element for latest Recipe
function FillLatest(collection, lang) {
    var LatestContainer = document.createElement("div") //Container to put latest recipes in
    var recipeContainer = document.createElement("div") //Containerr for each recipe
    recipeContainer.setAttribute("class", "recipe-container")
    var recipeImage = document.createElement("img") //image of recipe
    recipeImage.setAttribute("class", "recipe-image")
    recipeImage.setAttribute("src", "./" + collection.imageUrl) //dynamically set img src
    recipeImage.setAttribute("alt", collection.imageAlt) //dynamically set img alt src
    var generalText = document.createElement("div") //Text are for recipe
    generalText.setAttribute("class", "general-text-box")
    var recipeHead = document.createElement("div") //Header of recipe
    recipeHead.setAttribute("class", "recipe-heading")
    var latestRecipeDate = document.createElement("span") //to ad date inside
    latestRecipeDate.innerText = collection.dateAdded //dynamically get date of recipy
    latestRecipeDate.setAttribute("class", "latest-recipe-date")
    var h2 = document.createElement("h2")
    h2.innerText = collection.title //dynamically give h2 a title
    var p = document.createElement("p")
    p.innerText = collection.description //dynamically give p the description
    var a = document.createElement("a")
    if (lang == "ENG") {
        a.innerText = "Go to Recipe"
    } else {
        a.innerText = "Vai alla Ricetta"
    }
    a.setAttribute("href", collection.link + collection.title.replace(/ /g,"_")) //dynamically set href
    var TemplateContainer = document.getElementById("template-container") //where we are appending the elements created    
    TemplateContainer.appendChild(LatestContainer)
    LatestContainer.appendChild(recipeContainer)
    recipeContainer.appendChild(recipeImage)
    recipeContainer.appendChild(generalText)
    generalText.appendChild(recipeHead)
    recipeHead.appendChild(latestRecipeDate)
    recipeHead.appendChild(h2)
    generalText.appendChild(p)
    generalText.appendChild(a)
}

//this function speeds up the creation of tags and can add classes and id to them
function create(element, el_class = null, el_id = null, text = null) {
    let temp = document.createElement(element)
    if (el_class != null) {
        temp.setAttribute("class", el_class)
    }
    if (el_id != null) {
        temp.setAttribute("id", el_id)
    }
    if (text != null) {
        temp.innerText = text
    }
    return temp
}
//Another function to speed up setting up attributes, this I got from stackoverflow
function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}


//function that creates the div element for Main dishes and Starters

function FillRecipe(collection, lang) {
    var container = document.getElementById("template-container") //where we are going to append all the recipes
    var recipe = create("div", "recipe hover-class", collection.title.replace(/ /g,"_")) //add the title of the recipe as ID but replace space with underscroll
    container.appendChild(recipe) //recipe is the main contianer for all info of eachr recipe
    var recipe_tab = create("div", "recipe-tab")
    recipe.appendChild(recipe_tab)//appending the tab that will be seen all the time
    var recipe_thumbnail = create("img", "recipe-thumbnail")
    recipe_thumbnail.setAttribute("src", "./" + collection.imageUrl) //set image src dynamically
    recipe_thumbnail.setAttribute("alt", collection.imageAlt) //set alt of image src dynamically
    recipe_tab.appendChild(recipe_thumbnail) //image on left side of tab
    var recipe_description = create("div", "recipe-description")
    recipe_tab.appendChild(recipe_description) //append box contain recipe info
    var close_recipe = create("span", "close-recipe") //creates a span that can close expanded recipes
    if (lang == "ENG") { close_recipe.innerText = "close recipe" } //change language of the close recipe button
    else { close_recipe.innerText = "chiudi ricetta" }
    recipe_description.appendChild(close_recipe)//appending the link to close recipes
    var h2 = create("h2", "recipe-title-h2", null, collection.title) //creates the h2 with the title of the recipe
    recipe_description.appendChild(h2)
    var p1 = create("p", "recipe-description-p", null, collection.description)
    recipe_description.appendChild(p1)//adding the short description
    var recipe_main_content = create("div", "recipe-main-content") //creates the container for the other information of a recipe
    recipe.appendChild(recipe_main_content)//second half of recipe that is hidden until clicked on
    var recipe_ingr_and_img = create("div", "recipe-ingr-and-img")
    recipe_main_content.appendChild(recipe_ingr_and_img) //text and image appended
    var ingredients_list = create("div", "ingredients-list")
    recipe_ingr_and_img.appendChild(ingredients_list)
    var h3 = create("h3")
    if (lang == "ENG") { h3.innerText = "Ingredients" } //
    else { h3.innerText = "Ingredienti" }
    ingredients_list.appendChild(h3)
    var ul = create("ul") //creates ul to contain the recipe's ingredients
    for (var i = 0; i < collection.ingredients.length; i++) {//add all ingredients with a for loop
        var li = document.createElement("li")
        li.innerText = collection.ingredients[i]
        ul.appendChild(li)
    }
    ingredients_list.appendChild(ul) //all ingredients have been added now
    var img = create("img")
    img.setAttribute("src", "./" + collection.imageUrl)
    img.setAttribute("alt", collection.imageAlt) //set alt of image src dynamically
    recipe_ingr_and_img.appendChild(img) //big picture added
    var steps = create("div", "recipe-steps")
    recipe_main_content.appendChild(steps)
    var h3_steps = create("h3")
    if (lang == "ENG") { //changes the h3 text according to the value of language
        h3_steps.innerText = "Let's start Cooking!"
    } else {
        h3_steps.innerText = "Ai fornelli!"
    }
    steps.appendChild(h3_steps)
    for (var i = 0; i < collection.steps.length; i++) {
        var p = create("p", null, null, collection.steps[i]) //create a pragrapgh for each step of the recipe
        steps.appendChild(p)
    }
}
function FillBakery(collection, lang) {
    var container = document.getElementById("template-container") //where we are going to append all the recipes
    var recipe = create("div", "bakery hover-class bakMaxWidth", collection.title.replace(/ /g,"_")) //add the title of the recipe as ID but replace space with underscroll
    container.appendChild(recipe) //recipe is the main contianer for all info of eachr recipe
    var recipe_tab = create("div", "bakery-tab")
    recipe.appendChild(recipe_tab)//appending the tab that will be seen all the time
    var recipe_thumbnail = create("img", "bakery-thumbnail")
    recipe_thumbnail.setAttribute("src", "./" + collection.imageUrl) //set image src dynamically
    recipe_thumbnail.setAttribute("alt", collection.imageAlt)
    recipe_tab.appendChild(recipe_thumbnail) //image on left side of tab
    var recipe_description = create("div", "recipe-description")
    recipe_tab.appendChild(recipe_description) //append box contain recipe info
    var close_recipe = create("span", "close-recipe")
    if (lang == "ENG") { close_recipe.innerText = "close recipe" }
    else { close_recipe.innerText = "chiudi ricetta" }
    recipe_description.appendChild(close_recipe)//appending the link to close open recipes
    var h2 = create("h2", "recipe-title-h2", null, collection.title)
    recipe_description.appendChild(h2)
    var p1 = create("p", "recipe-description-p", null, collection.description)
    recipe_description.appendChild(p1)//adding the short description
    var hide_bottom = create("div", "after-description") //creates a div with a gradient alpha to hide overflow
    recipe_tab.appendChild(hide_bottom)//this is the div that will hide the overscroll
    var recipe_main_content = create("div", "recipe-main-content bakery-main-content")
    recipe.appendChild(recipe_main_content)//second half of recipe that is hidden until clicked on
    var recipe_ingr_and_img = create("div", "recipe-ingr-and-img")
    recipe_main_content.appendChild(recipe_ingr_and_img) //text and image appended
    var ingredients_list = create("div", "ingredients-list")
    recipe_ingr_and_img.appendChild(ingredients_list)
    var h3 = create("h3")
    if (lang == "ENG") { h3.innerText = "Ingredients" }
    else { h3.innerText = "Ingredienti" }
    ingredients_list.appendChild(h3)
    var ul = create("ul")
    for (var i = 0; i < collection.ingredients.length; i++) {
        var li = document.createElement("li")
        li.innerText = collection.ingredients[i]
        ul.appendChild(li)
    }
    ingredients_list.appendChild(ul) //all ingredients have been added now
    var img = create("img")
    img.setAttribute("src", "./" + collection.imageUrl)
    img.setAttribute("alt", collection.imageAlt)
    recipe_ingr_and_img.appendChild(img) //big picture added
    var steps = create("div", "recipe-steps")
    recipe_main_content.appendChild(steps)
    var h3_steps = create("h3")
    if (lang == "ENG") {
        h3_steps.innerText = "Let's start Cooking!"
    } else {
        h3_steps.innerText = "Ai fornelli!"
    }
    steps.appendChild(h3_steps)
    for (var i = 0; i < collection.steps.length; i++) {
        var p = create("p", null, null, collection.steps[i])
        steps.appendChild(p)
    }
}
function FillDesserts(collection, lang) {
    var container = document.getElementById("desserts-template-container") //where we are going to append all the recipes
    var recipe = create("div", "bakery hover-class bakMaxWidth dessMinWidth", collection.title.replace(/ /g,"_"))//add the title of the recipe as ID but replace space with underscroll
    container.appendChild(recipe) //recipe is the main contianer for all info of eachr recipe
    var recipe_tab = create("div", "bakery-tab")
    recipe.appendChild(recipe_tab)//appending the tab that will be seen all the time
    var recipe_thumbnail = create("img", "bakery-thumbnail")
    setAttributes(recipe_thumbnail, { "src": "./" + collection.imageUrl, "alt": collection.imageAlt })
    /*recipe_thumbnail.setAttribute("src", ) //set image src dynamically
    recipe_thumbnail.setAttribute("alt", collection.imageAlt) //set image alt dynamically*/
    recipe_tab.appendChild(recipe_thumbnail) //image on left side of tab
    var recipe_description = create("div", "recipe-description")
    recipe_tab.appendChild(recipe_description) //append box contain recipe info
    var close_recipe = create("span", "close-recipe")
    if (lang == "ENG") { close_recipe.innerText = "close recipe" }
    else { close_recipe.innerText = "chiudi ricetta" }
    recipe_description.appendChild(close_recipe)//appending the link to close open recipes
    var h2 = create("h2", "recipe-title-h2", null, collection.title)
    recipe_description.appendChild(h2)
    var p1 = create("p", "recipe-description-p", null, collection.description)
    recipe_description.appendChild(p1)//adding the short description
    var hide_bottom = create("div", "after-description")
    recipe_tab.appendChild(hide_bottom)//this is the div that will hide the overscroll
    var recipe_main_content = create("div", "recipe-main-content bakery-main-content")
    recipe.appendChild(recipe_main_content)//second half of recipe that is hidden until clicked on
    var recipe_ingr_and_img = create("div", "recipe-ingr-and-img")
    recipe_main_content.appendChild(recipe_ingr_and_img) //text and image appended
    var ingredients_list = create("div", "ingredients-list")
    recipe_ingr_and_img.appendChild(ingredients_list)
    var h3 = create("h3")
    if (lang == "ENG") { h3.innerText = "Ingredients" } //change ingredients to italian id lang is not ENG
    else { h3.innerText = "Ingredienti" }
    ingredients_list.appendChild(h3)
    var ul = create("ul")
    for (var i = 0; i < collection.ingredients.length; i++) {
        var li = create("li", null, null, collection.ingredients[i])
        ul.appendChild(li)
    }
    ingredients_list.appendChild(ul) //all ingredients have been added now
    var img = create("img")
    img.setAttribute("src", "./" + collection.imageUrl)
    img.setAttribute("alt", collection.imageAlt) //set image alt dynamically
    recipe_ingr_and_img.appendChild(img) //big picture added

    if (collection.hasOwnProperty("youtube")) { //if there is a youtube link in the recipe then we create the container for the video player
        var videobox = create("div", "video-container")
        recipe_main_content.appendChild(videobox)
        if (lang == "ENG") { //change h3 depeding on the language selected
            var yt_h3 = create("h3", null, null, "See How We Bake it!")
        } else {
            var yt_h3 = create("h3", null, null, "Guarda Come la Prepariamo!")
        }
        videobox.appendChild(yt_h3)//container heading 3
        var yt_iframe = create("iframe") //iframe for the youtube video
        var yt_div = create("div")
        setAttributes(yt_iframe, { "src": collection.youtube, "frameborder": 0, "allow": "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen": true })
        //attributes have been given by youtube
        videobox.appendChild(yt_div)
        yt_div.appendChild(yt_iframe)
    }
    var steps = create("div", "recipe-steps") //creates steps container
    recipe_main_content.appendChild(steps)
    var h3_steps = create("h3") //steps contianer title
    if (lang == "ENG") {
        h3_steps.innerText = "Let's start Cooking!"
    } else {
        h3_steps.innerText = "Ai fornelli!"
    }
    steps.appendChild(h3_steps)
    for (var i = 0; i < collection.steps.length; i++) { //loop and add all recipe steps
        var p = create("p", null, null, collection.steps[i])
        steps.appendChild(p)
    }
}


//functions to call population that will fill the pages with the appropiate recipes
function PopulateIndex(collection, lang = "ENG", nlatest) {//function to populate the index page with the latest recipes
    for (i = 0; i < nlatest; i++) {
        var recipe = collection[i]
        FillLatest(recipe, lang)
    }
    /*Object.values(collection).every(val => { //for each recipe in the collection create the latest recipe
        FillLatest(val, lang)
    })*/
    Carousel(6000, 1000) //we start the Carosuel function here
    if (lang == "ENG") {  //change the static text of page to english
        $("#latest-header").text("Our Latest Recipes")
        $("#p1").text("Hi! Welcome to our website! We are just a normal couple that likes to cook and have finally found a way to make it easy to share our favourite recipes with friends and family.")
        $("#p2").text("All our recipes are lactose free, so if you are looking for non-dairy recipes you are in the right spot.")
        $("#p3").text("We hope that you will find what you are looking for, if not come back soon. We will be adding new recipes constantly.")
    } else { //change the static test of website to italian
        $("#latest-header").text("Le ultime Ricette")
        $("#p1").text("Ciao! Benvenuti sul nostro sito web! Siamo una semplice coppia a cui piace cucinare e abbiamo finalmente trovato un modo per condividere facilmente le nostre ricette preferite con amici e familiari.")
        $("#p2").text("Tutte le nostre ricette sono prive di lattosio, quindi se stai cercando ricette senza latte animale, sei nel posto giusto.")
        $("#p3").text("Speriamo che troverai la ricetta che stai cercando, altrimenti torna presot siccome ne aggiungeremo di nuove costantmente.")
    }
}
function PopulateRecipes(collection, lang = "ENG") { //function to populate the starters or maindishes page with the appropriate recipes
    Object.values(collection).forEach(val => { //create a recipe card for each recipe in starters or maindishes @ recipe.js
        FillRecipe(val, lang)
    })
}

function PopulateBakery(collection, lang = "ENG") { //function to populate the bakery page with the appropriate recipes
    Object.values(collection).forEach(val => { //create a recipe card for each recipe in bakery @ recipe.js
        FillBakery(val, lang)
    })
}
function PopulateDesserts(collection, lang = "ENG") { //function to populate the desserts page with the appropriate recipes
    Object.values(collection).forEach(val => { //create a recipe card for each recipe in desserts @ recipe.js
        FillDesserts(val, lang)
    })
    //change text of static text in the desserts page
    if (lang == "ENG") {
        $("#baking-dairy").text("Baking Dairy Free")
        $("#range-vegan-desserts").text("See Our Range of dairyfree recipes below")
        $("#p1").text("All of the recipes here are made 100% lactose free. We are well aware that some people are not able to have meals containing milk. So all our recipes are made with non-dairy milk.")
        $("#p2").text("Non-dairy milk is made from plants such as soja, almonds, rice, coconuts  and many more.")
        $("#p3").text("Our favourites are almond or coconut milk. Soja also works perfectly well and some might even prefer its taste.")
    } else {
        $("#baking-dairy").text("Cucinare Senza Latte")
        $("#range-vegan-desserts").text("Ecco la nostra gamma di ricette senza lattosio")
        $("#p1").text("I nostri dessert sono realizzate al 100% senza lattosio. Sappiamo bene che alcune persone non sono in grado di consumare pasti contenenti latte. Quindi tutte le nostre ricette in questa pagina sono realizzate con latte vegetale.")
        $("#p2").text("Il latte vegetale è ottenuto da piante come soia, mandorle, riso, noci di cocco e molte altre.")
        $("#p3").text("I nostri preferiti sono il latte di mandorle o di cocco. Anche la soja funziona perfettamente e alcuni potrebbero addirittura preferirne il gusto.")
    }

}


function RemoveChildrenOf(id) { //we can remove eventual recipes that have been added in the html file 
    var parent = document.getElementById(id)
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

//my carousel function here
function Carousel(timer, fadetime) {
    var index = 1
    let images = document.getElementsByClassName("inside-img").length
    var next = document.getElementsByClassName("next")[0] //gets the next button from carousel
    var prev = document.getElementsByClassName("prev")[0] //get the previous button from carousel
    //we had listeners for the buttons
    next.addEventListener("click", function () { //on click show the nex image
        FadeImages(500)
    })
    prev.addEventListener("click", function () { //on click show previous image
        FadeImagesPrev(500)
    })
    //we add functions below
    function FadeImages(fadetime) {
        if (index >= images) { //if index of images is over the number of images go back to first image
            $(".inside-img:nth-of-type(" + index + ")").fadeOut(fadetime);
            $(".inside-img:nth-of-type(1)").fadeIn(fadetime)
            index = 1;
        } else { //otherwise go to next image
            $(".inside-img:nth-of-type(" + index + ")").fadeOut(fadetime);
            $(".inside-img:nth-of-type(" + (index + 1) + ")").fadeIn(fadetime);
            index++
        }
    }
    function FadeImagesPrev(fadetime) {
        if (index <= 1) { //if index of images is at first iamge and we click prev go to last image instead
            index = images
            $(".inside-img:nth-of-type(1)").fadeOut(fadetime);
            $(".inside-img:nth-of-type(" + index + ")").fadeIn(fadetime)
        } else { //otherwise go to previous image
            $(".inside-img:nth-of-type(" + index + ")").fadeOut(fadetime);
            $(".inside-img:nth-of-type(" + (index - 1) + ")").fadeIn(fadetime)
            index--
        }
    }
    function FadeTimer(timer, fadetime) {
        setTimeout(function () { //timer for the carousel to change pictures 
            FadeImages(fadetime)
            FadeTimer(timer, fadetime) //after we faded to the next image we recall the function
        },
            timer)
    }
    FadeTimer(timer, fadetime)
}

//We create the scripts for the recipe carousel
function RecipeCarousel() {
    let container = document.getElementById("desserts-template-container")

    //swipe code taken and adapted from stackoverflow
    container.addEventListener('touchstart', handleTouchStart, false)
    container.addEventListener('touchmove', handleTouchMove, false)

    var xDown = null

    function getTouches(evt) {
        return evt.touches ||             // browser API
            evt.originalEvent.touches; // jQuery
    }

    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX; //return the x value of where we touced the screen
    };

    function handleTouchMove(evt) {
        if (!xDown) { //if xDown is null exit the function
            return;
        }

        var xUp = evt.touches[0].clientX;
        var xDiff = xDown - xUp;

        if (Math.abs(xDiff) != 0) {//we we move finger horizontally then run below code
            let divLength = $("#recipe-carousel").width()
            let divLength2 = $("#desserts-template-container").width()
            let diff = divLength - divLength2; //we need the difference of the width so we know when to stop the scarousel from swiping
            let leftnext = parseFloat(container.style.left)
            if (xDiff > 0) { //if we swipe right the recipe cards will move to the left
                let leftCheck = leftnext - 200
                if (leftCheck <= diff) { //if the swipe would move the cards too far set the cards at diff position
                    container.style.left = diff + "px"
                }
                else { //swipe cards to the left by 200px
                    container.style.left = parseFloat(getComputedStyle(container).left) - 200 + "px"
                }
            } else { //if swipe is to the left recipe cards will move to the right
                let leftCheck = leftnext + 200
                if (leftCheck >= 0) { //if swipe would go out of boundaries keep cards at 0 position
                    container.style.left = 0 + "px"
                }
                else { //swipe cards right by 200px
                    container.style.left = parseFloat(getComputedStyle(container).left) + 200 + "px"
                }
            }
        }
        //reset values
        xDown = null;
    };


    //buttons to control the carousel
    $(".next-dessert").click(function () { //if next button is clicked, function swipes the carousel by 150px
        let divLength = $("#recipe-carousel").width()
        let divLength2 = $("#desserts-template-container").width()
        let diff = divLength - divLength2;
        let leftnext = parseFloat(container.style.left)
        let leftCheck = leftnext - 150
        if (leftCheck <= diff) { //if the swipe would move the cards too far set the cards at diff position
            container.style.left = diff + "px"
        } else { container.style.left = parseFloat(getComputedStyle(container).left) - 150 + "px" }

    })
    $(".prev-dessert").click(function () {
        let leftprev = parseFloat(container.style.left)
        let leftCheck = leftprev + 150
        if (leftCheck >= 0) { //if the swipe would move the cards too far set the cards at 0 position
            container.style.left = 0 + "px"
        } else { container.style.left = parseFloat(getComputedStyle(container).left) + 150 + "px" }
    })

}

//Script to put the latest 3 recipes in an array

function JoinAllRecipes(recipes) { //this function adds all the recipes into one array
    let allRecipes = []
    for (var i = 0; i < recipes.length; i++) {
        var collection = recipes[i]
        Object.values(collection).forEach(val => {
            allRecipes.push(val)
        })
    }
    return allRecipes
}

//JavaScript dates use American format so I need to change the format to American
function ChangeDateFormat(date1, date2) {
    var eu1 = date1.split("-")
    var eu2 = date2.split("-")
    var us1 = new Date(eu1[1] + "-" + eu1[0] + "-" + eu1[2])
    var us2 = new Date(eu2[1] + "-" + eu2[0] + "-" + eu2[2])
    let dates = [us1, us2]
    return dates
}

//Using Bubble Sort to sort the 
function SortRecipes(array) {
    for (var y = 0; y < array.length - 1; y++) {
        for (var i = 0; i < array.length - 1; i++) {
            var switches = 0
            var recDates = ChangeDateFormat(array[i].dateAdded, array[i + 1].dateAdded)
            if (recDates[0] < recDates[1]) {
                console.log("switch");
                var temp = array[i + 1]
                array[i + 1] = array[i]
                array[i] = temp
                switches++
            }
            //if (switches == 0) return array
        }
    }
    return array
}

const LatestITA = SortRecipes(JoinAllRecipes([StartersITA, MainsITA, BakeryITA, DessertITA]))
const LatestENG = SortRecipes(JoinAllRecipes([StartersENG, MainsENG, BakeryENG, DessertENG]))
