//-*-*-*-*-*-*-*-* Function to hide and show top menu on scroll -*-*-*-*-*-*-*-*//
//we add some important variables here
var tapped = false
var mediaWidth = 770



//Code found, modified and adpated from https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
var prevScrollpos = window.pageYOffset;
window.addEventListener("scroll", function HideTopMenu() {
    var header = document.getElementById("header")
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        header.style.top = "0"
        if (tapped) {
            $("#nav-menu").removeClass("invisible")
        }
    } else if (prevScrollpos < currentScrollPos) {
        header.style.top = "-96px"
        if ($(window).width() <= mediaWidth) {
            $("#nav-menu").addClass("invisible")
        }

    }
    prevScrollpos = currentScrollPos
})

//Code to show and hide navigation menu on mobile devices
$(document).ready(function () {
    //start of touch listener

    document.getElementById("button-menu").addEventListener("touchstart", function () {

        if ($("#nav-menu").hasClass("invisible")) {
            $("#nav-menu").removeClass("invisible")
            $("#button-menu").css({ "background-color": "rgba(70, 70, 70)", "transition": "0.25s" })
            tapped = true
            $("#nav-menu").fadeIn()
        } else if ($("#nav-menu").css("display") == "block") {
            $("#nav-menu").addClass("invisible")
            $("#button-menu").css({ "background-color": "rgba(255, 70, 70)", "transition": "0.25s" })
            tapped = false
        }
    })
    //end of touch listener

    $("#logo").click(function () { window.location = "index.html" }) //click on logo to go back to home

    //screen adjustment code
    screenWidth = $(window).width() + 17
    if (screenWidth <= mediaWidth) {
        $("#nav-menu").addClass("invisible")
        MouseOverFunc()
    }
})

function MouseOverFunc() {//mouse 

    $("#drop-down").mouseover(function () {
        $("#nav-menu").removeClass("invisible")
        $("#button-menu").css({ "background-color": "rgba(70, 70, 70)", "transition": "0.25s" })
    })
    $("#drop-down").mouseout(function () {
        $("#nav-menu").addClass("invisible")
        $("#button-menu").css({ "background-color": "rgba(255, 70, 70)", "transition": "0.25s" })
    })

}
$(window).resize(function () {
    screenWidth = $(window).width() + 17
    $("#drop-down").off() //resets the listener so that ti doesn't bug when chagning screen resolution
    if (screenWidth <= mediaWidth) {
        $("#nav-menu").addClass("invisible")
        MouseOverFunc()
    }
    if (screenWidth > mediaWidth) {
        $("#nav-menu").removeClass("invisible")
    }
})

//function to search and Show only the Recipes we want to see
function SearchBar() {
    var recipeList = [];
    var ingList = []
    var searchBar = document.getElementById("search-bar"); //get searchbar id
    SearchByRecipeName()

    $('#filter-menu').on('change', function () {
        
        searchBar.value = ""
        selection = $('#filter-menu option:selected').val()
        if (selection == "recipe_name") {
            SearchByRecipeName()
        } else if (selection == "ingredients") {
            SearchByIngredients()
        }


    })

    function SearchByRecipeName() {
        searched_val = document.getElementsByClassName("recipe-title-h2");
        for (var i = 0; i < searched_val.length; i++) {
            var recipeName = searched_val[i].innerHTML; //for each h3 we trasform 
            recipeName = recipeName.toLowerCase();
            recipeList.push(recipeName);
        }


        searchBar.addEventListener('keyup', function () { //add listener to search bar
            var text = searchBar.value; //gets value in the search bar
            text = text.toLowerCase(); //makes value lowercase
            for (var i = 0; i < searched_val.length; i++) { //scroll through all classes h3
                //var recipeName = searched_val[i].innerHTML;//assign recipename the [ith] class h3
                //recipeList.push(recipeName);//push the value of each h3 into an arraycalled RecipeList
                var element = $(searched_val[i]).closest(".bakery")//this is to select the correct card to show or 
                if (element.length == 0) {
                    element = $(searched_val[i]).closest(".recipe")//if .baery is not present use .recipe
                }
                if (recipeList[i].indexOf(text) < 0) {  //checks id any part of the string contains text in the search bar              
                    element.css("display", "none");
                } else {
                    //searched_val[i].style.display = 'Block'
                    element.css("display", "block")
                }
            }


        })
    }

    function SearchByIngredients() {
        var all_ingredients_list = document.getElementsByClassName("ingredients-list");
        searchBar.addEventListener('keyup', function () {
            var text = searchBar.value; //gets value in the search bar
            text = text.toLowerCase(); //makes value lowercase
            for (var eachCard = 0; eachCard < all_ingredients_list.length; eachCard++) {
                var UL = all_ingredients_list[eachCard].getElementsByTagName("UL")[0] //get the first and olny ul
                //we are in card 1
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
                    element.css("display", "none")
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

function addCrumb() {
    var page = window.location.pathname.split("/").pop().split(".")
    page = page[0]
    if (page == "") {
        page = "index"
    }
    sessionStorage.setItem("Crumb", page)
    let crumb = sessionStorage.getItem("Crumb")
    $("#" + crumb).css("border-bottom", "solid 2px rgba(255, 70, 70)")
}

//-*-*-*-*-*-*-*-* Change Light and Dark Mode for accessibility -*-*-*-*-*-*-*-*//

function LightDark(){
    let mode = sessionStorage.getItem("Mode")
    if (mode == "dark") {
        $("body").addClass("darkmode")
        $("header").addClass("darkHeader")
        $("a").addClass("darkModeText")
        $(".recipe, .bakery").addClass("darkHeader")
        $(".after-description").addClass("dark-after-description")
        $("#dark-mode img").css("height","24px")
        $("#light-mode img").css("height","16px")

    }
    if (mode == "light") {
        $("body").removeClass("darkmode")
        $("header").removeClass("darkHeader")
        $("a").removeClass("darkModeText")
        $(".recipe, .bakery").removeClass("darkHeader")
        $(".after-description").removeClass("dark-after-description")
        $("#light-mode img").css("height","24px")
        $("#dark-mode img").css("height","16px")
    }


}


//-*-*-*-*-*-*-*-* CODE TO LOAD APPROPRIATE CONTENT AFTER DOM LOADED -*-*-*-*-*-*-*-*//

window.addEventListener("DOMContentLoaded", function () {
    addCrumb()
    /*if (sessionStorage.getItem("Mode") == null) {
        sessionStorage.setItem("Mode","light")
    }*/
    let lang = sessionStorage.getItem("Lang") //get the value of the Lang Key from the sessionStorage
    let crumb = sessionStorage.getItem("Crumb") //get the value of the Crumb Key from sessionStorage
    if (lang === null) { //if the lang is null load page go to index
        if (crumb != "index") {            
            window.location.replace("index.html")
        }
        sessionStorage.setItem("Crumb", "index")
        sessionStorage.setItem("Lang", "ENG")
        sessionStorage.setItem("Mode","light")
        lang = sessionStorage.getItem("Lang")
        crumb = sessionStorage.getItem("Crumb")
    }

    if (lang == "ITA") { //if lang is italian compile italian
        PopulateMenu(NavMenuIta)
        if (crumb == "index") {
            PopulateIndex(LatestITA, lang) //compile for index-html only
        } else if (crumb == "starters") {
            PopulateStarters(StartersITA, lang) //compily for starters.html only 
        } else if (crumb == "bakery") {
            PopulateBakery(BakeryITA, lang)
        } else if (crumb == "maindishes") {
            PopulateMains(MainsITA, lang)
        } else if (crumb == "desserts") {
            PopulateBakery(DessertITA, lang)
        }
        $(".footer-info-box h3:first-child").text("Trovateci Anche Su")
        $(".search-items h3").text("Filtra per")
        $("#filter-menu option:first-child").text("Nome Ricetta")
        $("#filter-menu option:nth-child(2)").text("Ingredienti")
        $("#search-bar").attr("placeholder","ricerca...")
        //$("#filter-menu option").text("Nome Ricetta")

    }
    if (lang == "ENG") {//if lang is in english compile in English
        PopulateMenu(NavMenuEng)
        if (crumb == "index") { //compile for index-html only
            PopulateIndex(LatestENG, lang)
        } else if (crumb == "starters") { //compile for index-html only
            PopulateStarters(StartersENG, lang)
        } else if (crumb == "bakery") {
            PopulateBakery(BakeryENG, lang)
        } else if (crumb == "maindishes") {
            PopulateMains(MainsENG, lang)
        } else if (crumb == "desserts") {
            PopulateBakery(DessertENG, lang)
        }
        $(".footer-info-box h3:first-child").text("Find us Also Here")
        $(".search-items h3").text("Search by")
        $("#filter-menu option:first-child").text("Recipe Name")
        $("#filter-menu option:nth-child(2)").text("Ingredients")
        $("#search-bar").attr("placeholder","Search for...")
    }
    $("#dark-mode").click(function(){

        sessionStorage.setItem("Mode","dark")
        LightDark()
    })
    $("#light-mode").click(function(){

        sessionStorage.setItem("Mode","light")
        LightDark()
    })
    LightDark()
    addCrumb()
    ShowHide()
    if (crumb != "index") { SearchBar() }
})

$("#lang-ita").click(function () {
    sessionStorage.setItem("Lang", "ITA")
    location.reload()
})
$("#lang-eng").click(function () {
    sessionStorage.setItem("Lang", "ENG")
    location.reload()
})


//-*-*-*-*-*-*-*-* CODE TO SHOW AND HIDE RECIPES -*-*-*-*-*-*-*-*//
//---Old Code in comments below---Vanilla Javascript---//  
//document.getElementById("sformato-carote").addEventListener("click", function GetElementInfo(e){alert("test")})

function ShowHide() {
    $(".recipe").click(function GetElementInfo(e) {
        var recipeId = $(e.target).closest(".recipe") //.closest will navigate up through the parents and find the first item that sattisfies the request 
        var clickClass = e.target.className
        if (clickClass == "close-recipe") {
            //recipeId = e.target.parentNode.parentNode.parentNode.id   //---Old Code---Vanilla Javascript---//  /
            hide(recipeId)
        } else {
            show(recipeId)
        }

        function show(recipe) {
            recipe.removeClass("hover-class")
            recipe.find(".recipe-main-content").css({ "max-height": "2000px", "padding": "16px" })
            recipe.find(".close-recipe").css("display", "block")
            recipe.find(".recipe-thumbnail").css({ "height": "0", "width": "0", "min-height": "0" })
            $(".bakery").not(recipe).hide()

        }
        function hide(recipe) {
            recipe.addClass("hover-class")
            recipe.find(".recipe-main-content").css({ "max-height": "0px", "padding": "0px" })
            recipe.find(".close-recipe").css("display", "none")
            recipe.find(".recipe-thumbnail").css({ "width": "auto", "min-height": "187px", "height": "auto" })
            setTimeout(function () {
                $(".bakery").not(recipe).show()
            }, 500)
        }
    })
    $(".bakery").click(function GetElementInfo(e) {
        var clickClass = e.target.className
        var recipeId = $(e.target).closest(".bakery")
        var Id = $(e.target).closest("[id]").attr('id')
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
        function show(recipe) {
            recipe.removeClass("hover-class")
            recipe.css({"height": "auto" })
            recipe.removeClass("bakMaxWidth")
            recipe.find(".recipe-main-content").css({ "max-height": "2000px", "padding": "16px" })
            //.find will find the class that we are looking for among the children inside the div with id #recipeId
            recipe.find(".close-recipe").css("display", "block")
            recipe.find(".recipe-thumbnail").css("max-height", "100px")
            recipe.find(".bakery-main-content").css("display", "block")
            recipe.find(".after-description").css("display", "none")
            $(".bakery").not(recipe).hide()
        }
        function hide(recipe) {
            recipe.addClass("hover-class")
            recipe.addClass("bakMaxWidth")
            //.find will find the class that we are looking for among the children inside the div with id #recipeId
            recipe.find(".close-recipe").hide()
            //recipe.find(".recipe-thumbnail").css("min-width", "240px")
            recipe.find(".recipe-description-p").css("width", "auto")
            recipe.find(".bakery-main-content").hide()
            recipe.find(".after-description").css("display", "block")
            //recipe.css("transtion","0")
            $(".bakery").not(recipe).show()
            setTimeout(function () {
                
            }, 100)
        }
    })
}

//Navigation Menu Options Below
var NavMenuEng = ["HOME", "STARTERS & SIDES", "MAINS", "BAKERY", "DESSERTS"]
var NavMenuIta = ["HOME", "ANTIPASTI E CONTORNI", "PRINCIPALI", "LIEVITATI", "DESSERT"]
var NavLinks = ["index", "starters", "maindishes", "bakery", "desserts"]

//function to change the language of the Menu
function PopulateMenu(MenuLang) {
    var navContainer = document.getElementById("nav-menu") //get the navigation menu
    var ul = document.createElement("ul") 
    ul.setAttribute("class", "nav-menu") 

    for (var i = 0; i < MenuLang.length; i++) {//loop to populate ul tag with li tags
        var li = document.createElement("li")
        
        var a = document.createElement("a")
        a.setAttribute("id", NavLinks[i])
        a.setAttribute("href", NavLinks[i] + ".html")
        a.setAttribute("class","nav-menu-a-tags")       
        a.innerText = MenuLang[i]
        li.appendChild(a)
        ul.appendChild(li)
    }
    navContainer.appendChild(ul)
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
    var generalText = document.createElement("div") //Text are for recipe
    generalText.setAttribute("class", "general-text-box")
    var recipeHead = document.createElement("div") //Header of recipe
    recipeHead.setAttribute("class", "recipe-heading")
    var latestRecipeDate = document.createElement("span") //to ad date inside
    latestRecipeDate.innerText = collection.dateAdded //dynamically get date of recipy
    latestRecipeDate.setAttribute("class", "latest-recipe-date")
    var h2 = document.createElement("h2")
    h2.innerText = collection.title //gdynamically give h2 a title
    var p = document.createElement("p")
    p.innerText = collection.description //dynamically give p the description
    var a = document.createElement("a")
    if (lang == "ENG") {
        a.innerText = "Go to Recipe"
    } else {
        a.innerText = "Vai alla Ricetta"
    }
    a.setAttribute("href", collection.link) //dynamically set href to a tag
    var TemplateContainer = document.getElementById("template-container")
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
function FillRecipe(collection, lang) {
    var container = document.getElementById("template-container") //where we are going to append all the recipes
    var recipe = create("div")
    recipe.setAttribute("class", "recipe hover-class")
    recipe.setAttribute("id", collection.title)
    container.appendChild(recipe) //recipe is the main contianer for all info of eachr recipe
    var recipe_tab = create("div")
    recipe_tab.setAttribute("class", "recipe-tab")
    recipe.appendChild(recipe_tab)//appending the tab that will be seen all the time
    var recipe_thumbnail = create("img")
    recipe_thumbnail.setAttribute("class", "recipe-thumbnail")
    recipe_thumbnail.setAttribute("src", "./" + collection.imageUrl) //set image src dynamically
    recipe_tab.appendChild(recipe_thumbnail) //image on left side of tab
    var recipe_description = create("div")
    recipe_description.setAttribute("class", "recipe-description")
    recipe_tab.appendChild(recipe_description) //append box contain recipe info
    var close_recipe = create("span")
    close_recipe.setAttribute("class", "close-recipe")
    if (lang == "ENG") { close_recipe.innerText = "close recipe" }
    else { close_recipe.innerText = "chiudi ricetta" }
    recipe_description.appendChild(close_recipe)//appending the link to close open recipes
    var h2 = create("h2")
    h2.setAttribute("class", "recipe-title-h2")
    h2.innerText = collection.title
    recipe_description.appendChild(h2)
    var p1 = create("p")
    p1.setAttribute("class", "recipe-description-p")
    p1.innerText = collection.description
    recipe_description.appendChild(p1)//adding the short description
    var recipe_main_content = create("div")
    recipe_main_content.setAttribute("class", "recipe-main-content")
    recipe.appendChild(recipe_main_content)//second half of recipe that is hidden until clicked on
    var recipe_ingr_and_img = create("div")
    recipe_ingr_and_img.setAttribute("class", "recipe-ingr-and-img")
    recipe_main_content.appendChild(recipe_ingr_and_img) //text and image appended
    var ingredients_list = create("div")
    ingredients_list.setAttribute("class", "ingredients-list")
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
    recipe_ingr_and_img.appendChild(img) //big picture added
    var steps = create("div")
    steps.setAttribute("class", "recipe-steps")
    recipe_main_content.appendChild(steps)
    var h3_steps = create("h3")
    if (lang == "ENG") {
        h3_steps.innerText = "Let's start Cooking!"
    } else {
        h3_steps.innerText = "Ai fornelli!"
    }
    steps.appendChild(h3_steps)
    for (var i = 0; i < collection.steps.length; i++) {
        var p = create("p")
        p.innerText = collection.steps[i]
        steps.appendChild(p)
    }
}
function FillBakery(collection, lang) {
    var container = document.getElementById("template-container") //where we are going to append all the recipes
    var recipe = create("div")
    recipe.setAttribute("class", "bakery hover-class bakMaxWidth")
    recipe.setAttribute("id", collection.title)
    container.appendChild(recipe) //recipe is the main contianer for all info of eachr recipe
    var recipe_tab = create("div")
    recipe_tab.setAttribute("class", "bakery-tab")
    recipe.appendChild(recipe_tab)//appending the tab that will be seen all the time
    var recipe_thumbnail = create("img")
    recipe_thumbnail.setAttribute("class", "bakery-thumbnail")
    recipe_thumbnail.setAttribute("src", "./" + collection.imageUrl) //set image src dynamically
    recipe_tab.appendChild(recipe_thumbnail) //image on left side of tab
    var recipe_description = create("div")
    recipe_description.setAttribute("class", "recipe-description")
    recipe_tab.appendChild(recipe_description) //append box contain recipe info
    var close_recipe = create("span")
    close_recipe.setAttribute("class", "close-recipe")
    if (lang == "ENG") { close_recipe.innerText = "close recipe" }
    else { close_recipe.innerText = "chiudi ricetta" }
    recipe_description.appendChild(close_recipe)//appending the link to close open recipes
    var h2 = create("h2")
    h2.setAttribute("class", "recipe-title-h2")
    h2.innerText = collection.title
    recipe_description.appendChild(h2)
    var p1 = create("p")
    p1.setAttribute("class", "recipe-description-p")
    p1.innerText = collection.description
    recipe_description.appendChild(p1)//adding the short description
    var hide_bottom = create("div")
    hide_bottom.setAttribute("class", "after-description")
    recipe_tab.appendChild(hide_bottom)//this is the div that will hide the overscroll
    var recipe_main_content = create("div")
    recipe_main_content.setAttribute("class", "recipe-main-content bakery-main-content")
    recipe.appendChild(recipe_main_content)//second half of recipe that is hidden until clicked on
    var recipe_ingr_and_img = create("div")
    recipe_ingr_and_img.setAttribute("class", "recipe-ingr-and-img")
    recipe_main_content.appendChild(recipe_ingr_and_img) //text and image appended
    var ingredients_list = create("div")
    ingredients_list.setAttribute("class", "ingredients-list")
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
    recipe_ingr_and_img.appendChild(img) //big picture added
    var steps = create("div")
    steps.setAttribute("class", "recipe-steps")
    recipe_main_content.appendChild(steps)
    var h3_steps = create("h3")
    if (lang == "ENG") {
        h3_steps.innerText = "Let's start Cooking!"
    } else {
        h3_steps.innerText = "Ai fornelli!"
    }
    steps.appendChild(h3_steps)
    for (var i = 0; i < collection.steps.length; i++) {
        var p = create("p")
        p.innerText = collection.steps[i]
        steps.appendChild(p)
    }
}

//functions to call population that will fill the pages with the appropiate recipes
function PopulateIndex(collection, lang = "ENG") {
    Object.values(collection).forEach(val => {
        FillLatest(val, lang)
    })
    if (lang == "ENG") {
        $("#reach-us").text("Reach Us Also At")
        $("#latest-header").text("Our Latest Recipes")
    } else {
        $("#reach-us").text("Ci Trovate Anche Su")
        $("#latest-header").text("Le Ultime Ricette")
    }
    Carousel(6000, 1000) //we start the Carosuel function here
}
function PopulateStarters(collection, lang = "ENG") {
    Object.values(collection).forEach(val => {
        FillRecipe(val, lang)
    })
    if (lang == "ENG") {
        $("#reach-us").text("Reach Us Also At")
        $("#latest-header").text("Our Latest Recipes")
    } else {
        $("#reach-us").text("Ci Trovate Anche Su")
        $("#latest-header").text("Le Ultime Ricette")
    }
}
function PopulateMains(collection, lang = "ENG") {
    Object.values(collection).forEach(val => {
        FillRecipe(val, lang)
    })
    if (lang == "ENG") {
        $("#reach-us").text("Reach Us Also At")
        $("#latest-header").text("Our Latest Recipes")
    } else {
        $("#reach-us").text("Ci Trovate Anche Su")
        $("#latest-header").text("Le Ultime Ricette")
    }
}
function PopulateBakery(collection, lang = "ENG") {
    Object.values(collection).forEach(val => {
        FillBakery(val, lang)
    })
    if (lang == "ENG") {
        $("#reach-us").text("Reach Us Also At")
        $("#latest-header").text("Our Latest Recipes")
    } else {
        $("#reach-us").text("Ci Trovate Anche Su")
        $("#latest-header").text("Le Ultime Ricette")
    }
}

function RemoveChildrenOf(id) {
    var parent = document.getElementById(id)
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

function create(element) {
    return document.createElement(element)
}

//my carousel function here
function Carousel(timer, fadetime) {
    var index = 1
    let images = document.getElementsByClassName("inside-img").length
    var next = document.getElementsByClassName("next")[0] //gets the next button from carousel
    var prev = document.getElementsByClassName("prev")[0] //get the previous button from carousel
    //we had listeners for the buttons
    next.addEventListener("click", function () {
        FadeImages(500)       
    })
    prev.addEventListener("click", function () {
        FadeImagesPrev(500)       
    })
    //we add functions below
    function FadeImages(fadetime) {
        if (index >= images) {              
            $(".inside-img:nth-of-type("+index+")").fadeOut(fadetime);
            $(".inside-img:nth-of-type(1)").fadeIn(fadetime)
            index = 1 ;
        } else {
            $(".inside-img:nth-of-type("+index+")").fadeOut(fadetime);
            $(".inside-img:nth-of-type("+(index+1)+")").fadeIn(fadetime);
            index++ 
        }
    }
    function FadeImagesPrev(fadetime) {
        if (index <= 1) {
            index = images
            $(".inside-img:nth-of-type(1)").fadeOut(fadetime);
            $(".inside-img:nth-of-type("+index+")").fadeIn(fadetime)
        } else {
            $(".inside-img:nth-of-type("+index+")").fadeOut(fadetime);
            $(".inside-img:nth-of-type("+(index-1)+")").fadeIn(fadetime)
            index--
        }
    }
    function FadeTimer(timer, fadetime) {
        setTimeout(function () {               
            FadeImages(fadetime)                
            FadeTimer(timer, fadetime)
        },
            timer)
    }
    FadeTimer(timer, fadetime)
}

