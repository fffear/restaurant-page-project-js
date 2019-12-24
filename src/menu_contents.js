export function generateMenuContents() {
  let contentContainer = document.querySelector("#content");
  let menuContentContainer = document.createElement("div");
  menuContentContainer.classList.add("menu");

  let pageHeading = document.createElement("h1");
  pageHeading.textContent = "Menu";


  let menuOptions = document.createElement("div");
  menuOptions.classList.add("menu-options");

  createMenuOption("./assets/images/chicken_burger.jpg", "Chicken");
  createMenuOption("./assets/images/hamburger.jpg", "Beef");
  createMenuOption("./assets/images/vegetarian_burger.jpg", "Vegetarian");

  function createMenuOption(source, categoryName) {
    let menuCategoryOption = document.createElement("div");
    menuCategoryOption.style.padding = "1rem";
    menuCategoryOption.style.width = `${(1 / 3) * 100}%`;
    let chickenBurgerImage = document.createElement("img");
    chickenBurgerImage.setAttribute("src", source);
    chickenBurgerImage.setAttribute("alt", categoryName);
    chickenBurgerImage.setAttribute("width", "100%");
    chickenBurgerImage.setAttribute("height", "350px");
    chickenBurgerImage.style.paddingBottom = "1rem";
    let menuCategory = document.createElement("h2");
    menuCategory.textContent = categoryName;
    menuCategory.style.fontSize = "2rem";
    menuCategoryOption.style.textAlign = "center";
    menuCategoryOption.appendChild(chickenBurgerImage);
    menuCategoryOption.appendChild(menuCategory);
    menuOptions.appendChild(menuCategoryOption);
  }

  menuContentContainer.appendChild(pageHeading);

  menuContentContainer.appendChild(menuOptions);
  contentContainer.appendChild(menuContentContainer);
}