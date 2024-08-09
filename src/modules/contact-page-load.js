export default function ContactPageLoad() {
  const contentElem = document.querySelector("#content");
  contentElem.textContent = "";
  // Opening hours heading
  const openingHrsHeading = document.createElement("h2");
  openingHrsHeading.classList.add("contact-page-heading");
  openingHrsHeading.textContent = "Opening Hours";
  contentElem.appendChild(openingHrsHeading);
  // Opening hours text
  const openingHrsText = document.createElement("div");
  openingHrsText.classList.add("contact-page-text");
  openingHrsText.textContent = "Sunday - Thursday: 9 am to 11 pm";
  contentElem.appendChild(openingHrsText);

  // Contact heading
  const contactHeading = document.createElement("h2");
  contactHeading.classList.add("contact-page-heading");
  contactHeading.textContent = "Contact Us";
  contentElem.appendChild(contactHeading);
  // Phone
  const phoneText = document.createElement("div");
  phoneText.classList.add("contact-page-text");
  phoneText.textContent = "Phone: +1 (123)456-7890";
  contentElem.appendChild(phoneText);
  // Email
  const emailText = document.createElement("div");
  emailText.classList.add("contact-page-text");
  emailText.textContent = "Email: restaurant@example.com";
  contentElem.appendChild(emailText);
  // Address
  const addressText = document.createElement("div");
  addressText.classList.add("contact-page-text");
  addressText.textContent = "Address: 123 Ay Res St, ABC City, AZ 11100";
  contentElem.appendChild(addressText);
}