export default function InitialPageLoad(createDomElem, homePageImg) {
  const contentElem = document.querySelector("#content");
  contentElem.textContent = "";
  
  // Headline element
  createDomElem("h1", "homepage-headline", contentElem, "Ayman's Restaurant");
  // description element
  createDomElem("div", "homepage-desc", contentElem, "Welcome to \"Ayman's Restaurant\" a modern yet cozy restaurant in the heart of the city, where culinary artistry meets fresh, locally sourced ingredients. Our diverse menu, inspired by both local traditions and global flavors, offers something for every palate—from sizzling steaks to delicate sushi rolls. Whether you're here for a quick bite or a romantic dinner, our warm atmosphere and attentive service promise an unforgettable dining experience.");
  // Image element
  const imgElem = createDomElem("img", "homepage-img", contentElem);
  imgElem.src = homePageImg;
  imgElem.alt = "Interior of cozy restaurant, loft style stock photo";
}