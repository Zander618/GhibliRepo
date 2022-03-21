document.addEventListener("DOMContentLoaded", movieCard);

let card = document.getElementById("movie-cards");

function movieCard() {
  fetch("https://ghibliapi.herokuapp.com/films", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      for (const movie of data) {
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
      }
    });
}

const moviePickerButton = document.getElementById("picker")
moviePickerButton.addEventListener('click', randomMoviePicker)


function randomMoviePicker() {
  let randomMovie = Math.floor(Math.random() * 21);
  let movieTitle = ""
      switch (randomMovie) {
        case 0:
          movieTitle = "Castle in the Sky";
          break;
        case 1:
          movieTitle = 'Grave of the Fireflies';
          break;
        case 2:
          movieTitle = 'My Neighbor Totoro';
          break;
        case 3:
          movieTitle = "Kiki's Delivery Service";
          break;
        case 4:
          movieTitle = 'Only Yesterday';
          break;
        case 5:
          movieTitle = 'Porco Rosso';
          break;
        case 6:
          movieTitle = 'Pom Poko';
          break;
        case 7:
          movieTitle = 'Whisper of the Heart';
          break;
        case 8:
          movieTitle = 'Princess Mononoke';
          break;
        case 9:
          movieTitle = 'My Neighbors the Yamadas';
          break;
        case 10:
          movieTitle = 'Spirited Away';
          break;
        case 11:
          movieTitle = 'The Cat Returns';
          break;
        case 12:
          movieTitle = "Howl's Moving Castle";
          break;
        case 13:
          movieTitle = 'Tales from Earthsea';
          break;
        case 14:
          movieTitle = 'Ponyo';
          break;
        case 15:
          movieTitle = 'Arrietty';
          break;
        case 16:
          movieTitle = 'From Up on Poppy Hill';
          break;
        case 17:
          movieTitle = 'The Wind Rises';
          break;
        case 18:
          movieTitle = 'The Tale of the Princess Kaguya';
          break;
        case 19:
          movieTitle = 'When Marnie Was There';
          break;
        case 20:
          movieTitle = 'The Red Turtle';
          break;
        case 21:
          movieTitle = 'Earwig and the Witch';
          break;
      }
      let response = document.getElementById("response");
      response.innerText = movieTitle
}

