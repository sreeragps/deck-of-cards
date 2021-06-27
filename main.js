// cardsNames
const cardNames = [
  "2C",
  "2D",
  "2H",
  "2S",
  "3C",
  "3D",
  "3H",
  "3S",
  "4C",
  "4D",
  "4H",
  "4S",
  "5C",
  "5D",
  "5H",
  "5S",
  "6C",
  "6D",
  "6H",
  "6S",
  "7C",
  "7D",
  "7H",
  "7S",
  "8C",
  "8D",
  "8H",
  "8S",
  "9C",
  "9D",
  "9H",
  "9S",
  "10C",
  "10D",
  "10H",
  "10S",
  "AC",
  "AD",
  "AH",
  "AS",
  "JC",
  "JD",
  "JH",
  "JS",
  "KC",
  "KD",
  "KH",
  "KS",
  "QC",
  "QD",
  "QH",
  "QS",
];
let mainholder = document.querySelector(".card-holders");

const urlArr = [
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/2C.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/2D.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/2H.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/2S.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/3C.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/3D.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/3H.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/3S.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/4C.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/4D.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/4H.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/4S.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/5C.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/5D.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/5H.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/5S.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/6C.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/6D.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/6H.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/6S.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/7C.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/7D.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/7H.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/7S.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/8C.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/8D.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/8H.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/8S.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/9C.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/9D.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/9H.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/9S.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/10C.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/10D.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/10H.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/10S.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/AC.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/AD.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/AH.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/AS.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/JC.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/JD.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/JH.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/JS.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/KC.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/KD.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/KH.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/KS.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/QC.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/QD.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/QH.jpg?raw=true",
  "https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/QS.jpg?raw=true",
];
let clubs = 0;
let diamond = 0;
let hearts = 0;
let spade = 0;

let cl = [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48];
let di = [1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49];
let he = [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50];
let sp = [3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51];
let allCardContainer = document.getElementById("allCards");
let display = document.getElementById("result");
display.innerText = "not yet";

const initialSetUp = () => {
  let str = `<div id='100' class="card cardC" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
   <div id='101' class="card cardD" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
   <div id='102' class="card cardH" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
   <div id='103' class="card cardS" ondrop="drop(event)" ondragover="allowDrop(event)"></div>`;
  mainholder.innerHTML = str;
  let html = ``;
  for (let i = 0; i < 52; i++) {
    html += `<div  class="card"><img id=${i} src=${urlArr[i]} alt=${i} draggable="true" ondragstart="drag(event)"/></div>`;
  }
  let allcarddiv = `<div id="scattered" class="scattered-cards">${html}</div>`;
  allCardContainer.innerHTML = allcarddiv;
};
function drag(event) {
  event.dataTransfer.setData("c", event.target.id);
}
function allowDrop(event) {
  event.preventDefault();
}
function drop(e) {
  e.preventDefault();
  let card = document.getElementById(e.dataTransfer.getData("c"));
  let cardParent = card.parentNode;
  let last = e.currentTarget.lastElementChild;
  let idtarg = e.currentTarget.id;
  if (idtarg == 100) {
    let x = false;
    for (let i = 0; i < 13; i++) {
      if (cl[i] == card.id) {
        x = true;
        break;
      }
    }
    if (x == true) {
      clubs++;
      if (last) {
        e.currentTarget.removeChild(last);
      }
      e.currentTarget.appendChild(card);
      if (clubs == 13 && diamond == 13 && hearts == 13 && spade == 13) {
        display.style.backgroundColor = "yellow";
        display.style.color = "green";
        display.innerText = "You Won";
      }
    }
  } else if (idtarg == 101) {
    let x = false;
    for (let i = 0; i < 13; i++) {
      if (di[i] == card.id) {
        x = true;
        break;
      }
    }
    if (x == true) {
      diamond++;
      if (last) {
        e.currentTarget.removeChild(last);
      }
      e.currentTarget.appendChild(card);
      if (clubs == 13 && diamond == 13 && hearts == 13 && spade == 13) {
        display.style.backgroundColor = "yellow";
        display.style.color = "green";
        display.innerText = "You Won";
      }
    }
  } else if (idtarg == 102) {
    let x = false;
    for (let i = 0; i < 13; i++) {
      if (he[i] == card.id) {
        x = true;
        break;
      }
    }
    if (x == true) {
      hearts++;
      if (last) {
        e.currentTarget.removeChild(last);
      }
      e.currentTarget.appendChild(card);
      if (clubs == 13 && diamond == 13 && hearts == 13 && spade == 13) {
        display.style.backgroundColor = "yellow";
        display.style.color = "green";
        display.innerText = "You Won";
      }
    }
  } else if (idtarg == 103) {
    let x = false;
    for (let i = 0; i < 13; i++) {
      if (sp[i] == card.id) {
        x = true;
        break;
      }
    }
    if (x == true) {
      spade++;
      if (last) {
        e.currentTarget.removeChild(last);
      }
      e.currentTarget.appendChild(card);
      if (clubs == 13 && diamond == 13 && hearts == 13 && spade == 13) {
        display.style.backgroundColor = "yellow";
        display.style.color = "green";
        display.innerText = "You Won";
      }
    }
  }
}
function remove() {
  for (let i = 0; i < 4; i++) {
    let last = mainholder.lastElementChild;
    mainholder.removeChild(last);
  }
  let last = allCardContainer.lastElementChild;
  allCardContainer.removeChild(last);
}
function reset() {
  clubs = 0;
  diamond = 0;
  hearts = 0;
  spade = 0;
  remove();
  initialSetUp();
}
