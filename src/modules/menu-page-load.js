export default function MenuPageLoad() {
  const contentElem = document.querySelector("#content");
  contentElem.textContent = "";
  // Heading
  const menuHeading = document.createElement("h2");
  menuHeading.classList.add("menu-heading");
  menuHeading.textContent = "Menu";
  contentElem.appendChild(menuHeading);
  // Menu item
  const itemElem = document.createElement("div");
  itemElem.classList.add("menu-item");
  // image
  // Title 
  const itemTitleElem = document.createElement("div");
  itemTitleElem.classList.add("item-title");
  itemTitleElem.textContent = "";
  itemElem.appendChild(itemTitleElem);
  // Price
  const itemPriceElem = document.createElement("div");
  itemPriceElem.classList.add("item-price");
  itemPriceElem.textContent = "";
  itemElem.appendChild(itemPriceElem);

  contentElem.appendChild(itemElem);
}
/**
 * image 
 * title - price
 */