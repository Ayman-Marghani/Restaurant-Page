export default function ContactPageLoad(createDomElem) {
  const contentElem = document.querySelector("#content");
  contentElem.textContent = "";

  // Opening hours Div
  const openingHrsDiv = createDomElem("div", "contact-page-container", contentElem);
  // Opening hours heading
  createDomElem("h2", "contact-page-heading", openingHrsDiv, "Opening Hours");
  // Opening hours text
  createDomElem("div", "contact-page-text", openingHrsDiv, "Sunday - Thursday: 9 am to 11 pm");

  // Contact us Div
  const contactUsDiv = createDomElem("div", "contact-page-container", contentElem);
  // Contact Us heading
  createDomElem("h2", "contact-page-heading", contactUsDiv, "Contact Us");
  // Phone
  createDomElem("div", "contact-page-text", contactUsDiv, "Phone: +1 (123)456-7890");
  // Email
  createDomElem("div", "contact-page-text", contactUsDiv, "Email: restaurant@example.com");
  // Address
  createDomElem("div", "contact-page-text", contactUsDiv, "Address: 123 Ay Res St, ABC City");
}