export default function MenuPageLoad(menuItems) {
  const contentElem = document.querySelector("#content");
  contentElem.textContent = "";
  // Heading
  const menuHeading = document.createElement("h1");
  menuHeading.classList.add("menu-heading");
  menuHeading.textContent = "Menu";
  contentElem.appendChild(menuHeading);
  // Menu Items div
  const menuItemsDiv = document.createElement("div");
  menuItemsDiv.classList.add("menu-items");
  // Menu Items elements
  for (let i = 0; i < 6; i++) {
    // Menu item
    const itemElem = document.createElement("div");
    itemElem.classList.add("menu-item-card");
    // image
    const itemImgElem = document.createElement("img");
    itemImgElem.classList.add("item-img");
    itemImgElem.src = menuItems[i].image;
    itemElem.appendChild(itemImgElem);
    // Title 
    const itemTitleElem = document.createElement("div");
    itemTitleElem.classList.add("item-title");
    itemTitleElem.textContent = menuItems[i].title;
    itemElem.appendChild(itemTitleElem);
    // Price
    const itemPriceElem = document.createElement("div");
    itemPriceElem.classList.add("item-price");
    itemPriceElem.textContent = menuItems[i].price;
    itemElem.appendChild(itemPriceElem);
    // Append the item to the menu items div
    menuItemsDiv.appendChild(itemElem);
  }
  contentElem.appendChild(menuItemsDiv);
}