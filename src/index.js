import { pageLoad, generateHomeContents, generateMenuContents, generateContactContents } from './page_load.js';

pageLoad();
addListenerToNavLinks();


function addListenerToNavLinks() {
  let links = document.querySelector("nav ul");

  for (let link of links.children) {
    link.addEventListener("click", (e) => {
      updatePageContent(e);
      indicateCurrentTab(e);
    });
  }
}

function indicateCurrentTab(e) {
  let links = document.querySelector("nav ul");
  
  for (let link of links.children) {
    link.classList.remove("selected");
  }

  if (!e.target.className.includes("selected")) {
    e.target.className += "selected";
  }

  function removeSelectedClass() {

  }
}

function updatePageContent(e) {
  let pageContent = document.querySelector("#content");
  let currentClass = e.target.textContent.toLowerCase();

  if (pageContent.firstChild.className != currentClass) {
    pageContent.removeChild(pageContent.firstChild);
    addPageContent(currentClass);
  }
}

function addPageContent(className) {
  if (className == "home") {
    generateHomeContents();
  } else if (className == "menu") {
    generateMenuContents();
  } else {
    generateContactContents();
  }
}

