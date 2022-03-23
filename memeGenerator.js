const form = document.querySelector("#create-meme");
const memeSection = document.querySelector(".meme-section");

//this is what makes it all work
prepareInputs();
makeMeme();
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let finalMeme = makeMeme();
  memeSection.appendChild(finalMeme);
  resetInputs();
});

memeSection.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  }
});

//functions used found below
function prepareInputs() {
  let inputSources = [];
  const topTextInput = document.querySelector("#top");
  const bottomTextInput = document.querySelector("#bottom");
  const urlInput = document.querySelector("#url");
  let memeTopText = topTextInput.value;
  let memeBottomText = bottomTextInput.value;
  let memeUrl = urlInput.value;
  inputSources = [memeTopText, memeBottomText, memeUrl];
  return inputSources;
}

function makeMeme() {
  let inputs = prepareInputs();
  let newTop = document.createElement("h3");
  let newBottom = document.createElement("h2");
  let newPicture = document.createElement("img");
  let newDiv = document.createElement("div");
  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("meme-delete");
  deleteBtn.innerText = "Remove";
  newDiv.classList.add("meme-div");
  newPicture.classList.add("meme-pic");
  newTop.classList.add("meme-top");
  newBottom.classList.add("meme-bottom");
  newDiv.appendChild(newPicture);
  newDiv.appendChild(newTop);
  newDiv.appendChild(newBottom);
  newDiv.appendChild(deleteBtn);
  newPicture.src = inputs[2];
  newBottom.innerText = inputs[1];
  newTop.innerText = inputs[0];
  return newDiv;
}

function resetInputs() {
  const topTextInput = document.querySelector("#top");
  const bottomTextInput = document.querySelector("#bottom");
  const urlInput = document.querySelector("#url");
  urlInput.value = "";
  topTextInput.value = "";
  bottomTextInput.value = "";
}
