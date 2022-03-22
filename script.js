//DOM content loads and displays all movie cards. Needs timeOut in order to fetch before running the function.
let load = setTimeout(movieCard, 200);

document.addEventListener(
  "DOMContentLoaded",
  fetch("https://ghibliapi.herokuapp.com/films", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((data) => (obj = data)),

  load
);

//store fetch data outside of the functions. to lessen fetches
let obj;

//movieCard iterates through an API of Studio Ghibli movies and displays them in individual cards
let card = document.getElementById("movie-cards");

function movieCard() {
  for (const movie of obj) {
    card.style.display = "block";
    let cardContents = document.createElement("h4");
    let cardYear = document.createElement("h4");
    let cardImage = document.createElement("img");
    let button = document.createElement("button");
    cardImage.src = movie.image;
    cardImage.className = "movie-image";
    cardContents.textContent = movie.title;
    cardYear.textContent = movie.release_date;
    cardContents.className = "movie-card";
    button.textContent = "Click for more information";
    cardContents.append(cardImage, cardYear, button);
    card.appendChild(cardContents);
    button.addEventListener("click", singleMovieCard);
  }
  fullMovieCard.style.display = "none";
}

//Single movie is a function triggered by the "click more information" button on Movie Cards
// This function changes the display of the DOM content load to "none" and reverts back to "block" when the back button is pressed

let fullMovieCard = document.getElementById("single-card");
let cardContents = document.createElement("h4");

function singleMovieCard(e) {
  for (let movie of obj)
    if (movie.title === e.path[1].firstChild.data) {
      fullMovieCard.style.display = "block";
      let cardYear = document.createElement("h4");
      let cardImage = document.createElement("img");
      let button = document.createElement("button");
      let p = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let p4 = document.createElement("p");
      cardImage.src = movie.movie_banner;
      cardImage.className = "full-size-image";
      cardContents.textContent = movie.title;
      cardYear.textContent = movie.release_date;
      p4.textContent = `Run Time ${movie.running_time}mins.`;
      p3.textContent = `Rotten Tomato Score: ${movie.rt_score}%`;
      p2.textContent = `Director: ${movie.director}`;
      p.textContent = movie.description;
      cardContents.className = "full-movie-card";
      button.textContent = "back";
      cardContents.append(cardImage, cardYear, p, p2, p3, p4, button);
      fullMovieCard.appendChild(cardContents);
      button.addEventListener("click", cardsOnOff);
    }
  card.style.display = "none";
}

function cardsOnOff() {
  //full page render
  card.style.display = "block";
  //single card
  fullMovieCard.removeChild(cardContents);
}

// An extra function to choose a movie at random to be display on the banner

const moviePickerButton = document.getElementById("picker");
moviePickerButton.addEventListener("click", randomMoviePicker);

function randomMoviePicker() {
  let randomMovie = Math.floor(Math.random() * 21);
  let movieTitle = "";
  switch (randomMovie) {
    case 0:
      movieTitle = "Castle in the Sky";
      break;
    case 1:
      movieTitle = "Grave of the Fireflies";
      break;
    case 2:
      movieTitle = "My Neighbor Totoro";
      break;
    case 3:
      movieTitle = "Kiki's Delivery Service";
      break;
    case 4:
      movieTitle = "Only Yesterday";
      break;
    case 5:
      movieTitle = "Porco Rosso";
      break;
    case 6:
      movieTitle = "Pom Poko";
      break;
    case 7:
      movieTitle = "Whisper of the Heart";
      break;
    case 8:
      movieTitle = "Princess Mononoke";
      break;
    case 9:
      movieTitle = "My Neighbors the Yamadas";
      break;
    case 10:
      movieTitle = "Spirited Away";
      break;
    case 11:
      movieTitle = "The Cat Returns";
      break;
    case 12:
      movieTitle = "Howl's Moving Castle";
      break;
    case 13:
      movieTitle = "Tales from Earthsea";
      break;
    case 14:
      movieTitle = "Ponyo";
      break;
    case 15:
      movieTitle = "Arrietty";
      break;
    case 16:
      movieTitle = "From Up on Poppy Hill";
      break;
    case 17:
      movieTitle = "The Wind Rises";
      break;
    case 18:
      movieTitle = "The Tale of the Princess Kaguya";
      break;
    case 19:
      movieTitle = "When Marnie Was There";
      break;
    case 20:
      movieTitle = "The Red Turtle";
      break;
    case 21:
      movieTitle = "Earwig and the Witch";
      break;
  }
  let response = document.getElementById("response");
  response.innerText = movieTitle;
}
