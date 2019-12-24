export function generateContactContents() {
  let contentContainer = document.querySelector("#content");
  let contactContentContainer = document.createElement("div");
  contactContentContainer.classList.add("contact");

  let pageHeading = document.createElement("h1");
  pageHeading.textContent = "Contact Details";

  let address = document.createElement("p");
  address.textContent = "Address: 145 Elizabeth St, Melbourne, VIC, 3000";

  let email = document.createElement("p");
  email.textContent = "Email: admin@kevinsburgerjoint.com";

  let contactNumber = document.createElement("p");
  contactNumber.textContent = "Number: (03) 9783 5007";

  contactContentContainer.appendChild(pageHeading);

  contactContentContainer.appendChild(address);
  contactContentContainer.appendChild(email);
  contactContentContainer.appendChild(contactNumber);
  contentContainer.appendChild(contactContentContainer);
}