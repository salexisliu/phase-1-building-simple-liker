// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const hearts = document.querySelectorAll(".like-glyph");

hearts.forEach((heart) => heart.addEventListener("click", likeEvent));
//Q: why do I need to specify heart???

function likeEvent(e) {
  mimicServerCall().then(changeHeart(e)).catch(errorMessage);
  //
}

function errorMessage(error) {
  console.log(error)
  const modal = document.querySelector("#modal")
  modal.classList.remove("hidden")
  setTimeout((()=> modal.classList.add("hidden")), 3000)
  
}

function changeHeart(e) {
  // const modal = document.querySelector("#modal");
  // modal.classList.add("hidden");
  console.log(e.target);
  if (e.target.innerText === EMPTY_HEART) {
    e.target.innerText = FULL_HEART;
    e.target.classList.add("activated-heart");
  } else if (e.target.innerText === FULL_HEART) {
    e.target.innerText = EMPTY_HEART;
    e.target.classList.remove("activated-heart")
  }
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
