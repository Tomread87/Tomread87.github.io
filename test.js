function populateLatest(object){
    var LatestContainer = document.createElement("div")
    var recipeContainer = document.createElement("div")
    recipeContainer.setAttribute("class","recipe-container")
    var recipeImage = document.createElement("img")
    recipeImage.setAttribute("class","recipe-image")
    var generalText = document.createElement("div")
    generalText.setAttribute("class","general-text-box")
    var recipeHead = document.createElement("div")
    recipeHead.setAttribute("class","recipe-heading")
    var latestRecipeDate = document.createElement("span")
    latestRecipeDate.setAttribute("class","latest-recipe.date")
    var h2 = document.createElement("h2")
    var p = document.createElement("p")
    var a = document.createElement("a")
    a.innerText = object.Recipe_1.dateAdded

    var paste = document.getElementById("paste")

    paste.appendChild(LatestContainer)
    LatestContainer.appendChild(recipeContainer)
    recipeContainer.appendChild(recipeImage)
    recipeContainer.appendChild(generalText)
    generalText.appendChild(recipeHead)
    recipeHead.appendChild(latestRecipeDate)
    recipeHead.appendChild(h2)
    recipeContainer.appendChild(p)
    recipeContainer.appendChild(a)
}
