document.addEventListener('DOMContentLoaded', movieCard)

let card = document.getElementById("movie-cards")

function movieCard(){
  fetch("https://ghibliapi.herokuapp.com/films", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(resp => resp.json())
  .then(data => {
    console.log(data)
    for (const movie of data){
    let cardContents = document.createElement("h4")
    let cardYear = document.createElement("h4")
    let cardImage = document.createElement("img")
    let button = document.createElement("button")
    cardImage.src = movie.image
    cardImage.className = "movie-image"
    cardContents.textContent = movie.title
    cardYear.textContent = movie.release_date
    cardContents.className = "movie-card"
    button.textContent = "Click for more information"
    cardContents.append(cardImage, cardYear, button)
    card.appendChild(cardContents)
    }
  })
  } 
