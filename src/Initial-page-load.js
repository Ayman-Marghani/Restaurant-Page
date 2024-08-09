export default function InitialPageLoad() {
  const contentElem = document.querySelector("#content");
  // Headline element
  const headlineElem = document.createElement("h2");
  headlineElem.classList.add("homepage-headline");
  headlineElem.textContent = "Ayman's Restaurant";
  contentElem.appendChild(headlineElem);
  // Image element
  const imgElem = document.createElement("img");
  imgElem.classList.add("homepage-img");
  imgElem.src = "/src/restuarant-image.jpg";
  imgElem.alt = "Interior of cozy restaurant, loft style stock photo";
  contentElem.appendChild(imgElem);
  // description element
  const descElem = document.createElement("div");
  descElem.classList.add("homepage-desc");
  descElem.textContent = "Welcome to \"Ayman's Restaurant\" a modern yet cozy restaurant in the heart of the city, where culinary artistry meets fresh, locally sourced ingredients. Our diverse menu, inspired by both local traditions and global flavors, offers something for every palate—from sizzling steaks to delicate sushi rolls. Whether you're here for a quick bite or a romantic dinner, our warm atmosphere and attentive service promise an unforgettable dining experience.";
  contentElem.appendChild(descElem);
}