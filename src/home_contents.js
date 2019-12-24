export function generateHomeContents() {
  let contentContainer = document.querySelector("#content");

  let homeContentContainer = document.createElement("div");
  homeContentContainer.classList.add("home");

  let pageHeading = document.createElement("h1");
  pageHeading.textContent = "Kevin's Burger Joint";

  let salesCopy = document.createElement("p");
  salesCopy.textContent = "Kevin's Burger Joint is a family run business with a vision to offer gourmet burgers created from preparing fresh ingredients and only using meat where the animals have been grassfed.";

  let hamburgerImage = document.createElement("img");
  hamburgerImage.setAttribute("src", "./assets/images/hamburger.jpg");
  hamburgerImage.setAttribute("alt", "hamburger image");
  hamburgerImage.setAttribute("height", "auto");
  hamburgerImage.setAttribute("width", "400px");
  hamburgerImage.setAttribute("style", "display: block; margin: 0 auto 1rem");

  homeContentContainer.appendChild(pageHeading);
  homeContentContainer.appendChild(hamburgerImage);
  homeContentContainer.appendChild(salesCopy);

  contentContainer.appendChild(homeContentContainer);
}