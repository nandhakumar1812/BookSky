var popupButton = document.getElementById("add-popup-button")

var overLay = document.querySelector(".popup-overlay")

var popupMenu = document.querySelector(".popup-add-book")

popupButton.addEventListener("click" , function () {

    overLay.style.display = "block";

    popupMenu.style.display = "block"; 

})

var cancelButton = document.getElementById("cancel-popup")

cancelButton.addEventListener("click" , function(event){

    event.preventDefault()

    overLay.style.display = "none";

    popupMenu.style.display = "none"; 

    var bookName = document.getElementById("book-name-input")

    var authorName = document.getElementById("author-name-input")

    var description = document.getElementById("book-description-input")

    bookName.value = ""

    authorName.value = ""

    description.value = ""

})

var addBookButton = document.getElementById("add-book-button")

var test = document.getElementById("test")

var bookslideContainer = document.querySelector(".container")

addBookButton.addEventListener("click" , function(event) {

    event.preventDefault()

    overLay.style.display = "none";

    popupMenu.style.display = "none"; 

    var bookName = document.getElementById("book-name-input")

    var authorName = document.getElementById("author-name-input")

    var description = document.getElementById("book-description-input")

    var slide = document.createElement("div")

    slide.setAttribute("class" , "bookslide")

    var bookNameElement = document.createElement("h2")

    bookNameElement.textContent = bookName.value

    console.log(bookNameElement);
    
    slide.appendChild(bookNameElement)

    var authorNameElement = document.createElement("h5")

    authorNameElement.textContent = authorName.value

    console.log(authorNameElement);
    
    slide.appendChild(authorNameElement)

    var descriptionElement = document.createElement("p")

    descriptionElement.textContent = description.value

    console.log(descriptionElement)

    slide.appendChild(descriptionElement)

    var deleteButtonElement = document.createElement("button")

    deleteButtonElement.setAttribute("onclick" , "deleteSlide(event)")

    deleteButtonElement.textContent = "Delete"

    console.log(deleteButtonElement);

    slide.appendChild(deleteButtonElement)

    bookslideContainer.appendChild(slide)

    bookName.value = ""

    authorName.value = ""

    description.value = ""

})

function deleteSlide(event){

    event.target.parentElement.remove()

}