window.sessionStorage //this will create a temporary variable that will be stored in the brwoser to keep some of our needed states

//-*-*-*-*-*-*-*-* Function to hide and show top menu on scroll -*-*-*-*-*-*-*-*//
//Code found, modified and adpated from https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
var prevScrollpos = window.pageYOffset;
window.addEventListener("scroll", function HideTopMenu(){    
    var header = document.getElementById("header")
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos+25) {
        header.style.top = "0"
    } else if (prevScrollpos < currentScrollPos) {
        header.style.top = "-96px"
    }
    prevScrollpos = currentScrollPos
})

//code to show and hide navigation menu on mobile devices
$(document).ready(function(){
    var screenWidth = $(window).width()
    if (screenWidth <= 850){
        $("#drop-down").mouseover(function(){
            $("#nav-menu").css("display","block")
            $("#button-menu").css({"background-color":"rgba(70, 70, 70)", "transition":"0.25s"})
        })
        $("#drop-down").mouseout(function(){
            $("#nav-menu").css("display","none")
            $("#button-menu").css({"background-color":"rgba(255, 70, 70)", "transition":"0.25s"})
        })
    }
})

$(window).resize(function(){
    var screenWidth = $(window).width()
    if (screenWidth <= 850) {
        $("#drop-down").mouseover(function(){
            $("#nav-menu").css("display","block")
            $("#button-menu").css("background-color","grey;")
        })
        $("#drop-down").mouseout(function(){
            $("#nav-menu").css("display","none")
        })
    } else {
        $("#nav-menu").css("display","block")
        $("#drop-down").mouseover(function(){
            $("#nav-menu").css("display","block")
        })
        $("#drop-down").mouseout(function(){
            $(".hide-menu").css("display","block")
        })
    }
    console.log(screenWidth);
}

)
/*window.addEventListener('resize', function(event){
    var screenWidth = window.innerWidth;


})*/




//-*-*-*-*-*-*-*-* Handlebars.js -*-*-*-*-*-*-*-*//
/*var srcMenu = document.getElementById("menu-template").innerHTML
var templateMenu = Handlebars.compile(srcMenu)*/

/*var menuENG = templateMenu({home:"HOME", STARTERS:"STARTERS & SIDES", MAINDISHES:"MAINS", BAKERY:"BAKERY", DESSERTS:"DESSERTS"})
var menuITA = templateMenu({home:"HOME", STARTERS:"ANTIPASTI E CONTORNI", MAINDISHES:"PIATTI PRINCIPALI", BAKERY:"LIEVITATI", DESSERTS:"DESSERT"})
*/
if (window.location.href.indexOf("starters") > -1) {
    var srcRecipe = document.getElementById("recipe-template").innerHTML;
    var template = Handlebars.compile(srcRecipe)
} else if (window.location.href.indexOf("index") > -1) {
    var srcLatest = document.getElementById("latest-recipes-template").innerHTML    
    var template = Handlebars.compile(srcLatest);
} else if (window.location.href.indexOf("index") > -1) {

} else if (window.location.href.indexOf("bakery") > -1) {
    var srcBakery = document.getElementById("bakery-template").innerHTML    
    var template = Handlebars.compile(srcBakery);
}

//-*-*-*-*-*-*-*-* CODE TO CREATE BREADCRUMB -*-*-*-*-*-*-*-*//

/*$("#nav-menu").click(function(e){
    e.target.id
    sessionStorage.setItem("Crumb", e.target.id)
})*/

//this functions leaves stores a value in sessionStorage so that the user can see which page he is currently at
function addCrumb(){
    
    var page = window.location.pathname.split("/").pop().split(".")
    page = page[0]
    sessionStorage.setItem("Crumb",page)
    let crumb = sessionStorage.getItem("Crumb")
    $("#"+crumb).css("border-bottom","solid 2px rgba(255, 70, 70)")
}

//-*-*-*-*-*-*-*-* CODE TO CHOOSE LANGUAGE -*-*-*-*-*-*-*-*//


window.addEventListener("DOMContentLoaded",function(){
    addCrumb()
    var lang = sessionStorage.getItem("Lang") //get the value of the Lang Key from the sessionStorage
    let crumb = sessionStorage.getItem("Crumb") //get the value of the Crumb Key from sessionStorage
    
    if (lang === null){ //if the lang is null load page in neglish
        sessionStorage.setItem("Crumb","index")
        sessionStorage.setItem("Lang", "ENG")
        PopulateMenu(NavMenuEng)
        $('#nav-menu-mobile').html(menuENG)
        lang = sessionStorage.getItem("Lang")
        crumb = sessionStorage.getItem("Crumb")
    }
    
    if (lang == "ITA") { //if lang is italian compile italian
        PopulateMenu(NavMenuIta)
        /*if (crumb == "index") {
            PopulateMain(LatestITA) //compile for index-html only
        } else if (crumb == "starters") {
            PopulateMain(StartersITA) //compily for starters.html only 
        } else if (crumb == "bakery") {
            PopulateMain(BakeryITA)
        }*/
    } 
    if (lang == "ENG") {//if lang is in english compile inglish
        PopulateMenu(NavMenuEng)
        if (crumb == "index") { //compile for index-html only
            PopulateMain(LatestENG)
        } else if (crumb == "starters") { //compile for index-html only
            PopulateMain(StartersENG)
        } else if (crumb == "bakery") {
            PopulateMain(BakeryENG)
        }
    }
    addCrumb()    
})

$("#lang-ita").click(function(){
    sessionStorage.setItem("Lang", "ITA")
    location.reload()
})
$("#lang-eng").click(function(){
    sessionStorage.setItem("Lang", "ENG")
    location.reload()   
})


//function to populate various pages with recipes
function PopulateMain(category){
    let main = document.getElementById("main-content")
    for (var recipe in category) {
        const nodeRec = document.createElement("div")
        nodeRec.setAttribute("id", category[recipe].title)
        nodeRec.innerHTML = template(category[recipe])
        main.appendChild(nodeRec)
    }
    ShowHide()
}

//-*-*-*-*-*-*-*-* CODE TO SHOW AND HIDE RECIPES -*-*-*-*-*-*-*-*//
//---Old Code in comments below---Vanilla Javascript---//  
//document.getElementById("sformato-carote").addEventListener("click", function GetElementInfo(e){alert("test")})

function ShowHide(){
    $(".recipe").click(function GetElementInfo(e){
        var clickClass = e.target.className
        var recipeId = $(e.target).closest(".recipe") //.closest will navigate up through the parents and find the first item that sattisfies the request 
        if (clickClass == "recipe-description-p" || clickClass == "recipe-title-h2") {
            //recipeId = e.target.parentNode.parentNode.parentNode.parentNode.id    //---Old Code---Vanilla Javascript---//  
            show(recipeId)
        } else if (clickClass == "recipe-thumbnail") {
            //recipeId = e.target.parentNode.parentNode.id  //---Old Code---Vanilla Javascript---//  
            show(recipeId)
        } else if (clickClass == "close-recipe") {
            //recipeId = e.target.parentNode.parentNode.parentNode.id   //---Old Code---Vanilla Javascript---//  /
            hide(recipeId)
        }
        function show(recipe) {
            recipe.removeClass("hover-class")
            recipe.css("max-height","2000px")
            //.find will find the class that we are looking for among the children inside the div with id #recipeId
            recipe.find(".close-recipe").css("display", "block")
            recipe.find(".recipe-thumbnail").css("min-width","0")
            recipe.find(".recipe-description-p").css("width","80%")
            //---Old Code---Vanilla Javascript---//    
            //document.getElementById(recipeId).childNodes[3].style.display = "block"
            //document.getElementById(recipeId).childNodes[1].childNodes[1].style.display = "none"
            //document.getElementById(recipeId).childNodes[1].childNodes[3].childNodes[1].style.display ="block"
            //document.getElementById(recipeId).classList.remove("hover-class")
        }
        function hide(recipe){
            recipe.addClass("hover-class")
            recipe.css("max-height", "168px") 
            //.find will find the class that we are looking for among the children inside the div with id #recipeId
            recipe.find(".close-recipe").css("display", "none")
            recipe.find(".recipe-thumbnail").css("min-width","250px")
            recipe.find(".recipe-description-p").css("width","auto")
            //---Old Code---Vanilla Javascript---//    
            //document.getElementById(recipeId).classList.add("hover-class")
            //document.getElementById(recipeId).childNodes[3].style.display = "none"
            //document.getElementById(recipeId).childNodes[1].childNodes[1].style.display = "block"
            //document.getElementById(recipeId).childNodes[1].childNodes[3].childNodes[1].style.display ="none"
        }
    })
    $(".bakery").click(function GetElementInfo(e){
        var clickClass = e.target.className
        var recipeId = $(e.target).closest(".bakery")
        var Id = $(e.target).closest("[id]").attr('id')
        //.closest will navigate up through the parents and find the first item that sattisfies the request 
        console.log(Id);
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
            recipe.css({"max-width":"2000px","height":"auto"})
            //.find will find the class that we are looking for among the children inside the div with id #recipeId
            recipe.find(".close-recipe").css("display", "block")
            recipe.find(".recipe-thumbnail").css("min-height","0")
            recipe.find(".bakery-main-content").css("display","block")
            $(".bakery").not(recipe).hide()
        }
        function hide(recipe){
            recipe.addClass("hover-class")
            recipe.css({"max-width":"240px", "height":"450px"}) 
            //.find will find the class that we are looking for among the children inside the div with id #recipeId
            recipe.find(".close-recipe").hide()
            recipe.find(".recipe-thumbnail").css("min-width","240px")
            recipe.find(".recipe-description-p").css("width","auto")
            recipe.find(".bakery-main-content").hide()
            //recipe.css("transtion","0")
            
            setTimeout(function (){
                $(".bakery").not(recipe).show()
            }, 500)
                        
        }
    })
}
ShowHide()

var NavMenuEng = ["HOME","STARTERS & SIDES","MAINS","BAKERY","DESSERTS"]
var NavMenuIta = ["HOME","ANTIPASTI E CONTORNI","PRINCIPALI","LIEVITATI","DESSERT"]
var NavLinks = ["index","starters","maindishes","bakery","desserts"]
function PopulateMenu(MenuLang){
    //RemoveChildrenof("nav-menu")
    var navContainer = document.getElementById("nav-menu")
    var ul = document.createElement("ul")
    ul.setAttribute("class","nav-menu")

    for (var i = 0; i < MenuLang.length; i++){
        var li = document.createElement("li")
        var a = document.createElement("a")
        a.setAttribute("id",NavLinks[i])
        a.setAttribute("href",NavLinks[i]+".html")
        a.innerText = MenuLang[i]
        li.appendChild(a)
        ul.appendChild(li)
    }
    navContainer.appendChild(ul)
}
//PopulateMenu(NavMenuEng)