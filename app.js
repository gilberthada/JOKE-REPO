// const jokeText = document.getElementById("joke");
// const jokeBtn = document.getElementById("jokeBtn");

document.getElementById("jokeBtn").addEventListener("click", generateJokes);

async function generateJokes() {
  //api is from jokeapi.dev

  const response = await fetch(
    "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
  );
  const data = await response.json();
  console.log(data);
  let joke = "";
  if (data.joke == undefined) {
    // meaning if joke is not there
    joke = `${data.setup} <br> ${data.delivery}`;
  } else {
    joke = data.joke;
  }
  document.getElementById("joke").innerHTML = joke;
}
