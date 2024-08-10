export default function MenuPageLoad(createDomElem, menuItems) {
  const menuItemsLen = menuItems.length;
  const contentElem = document.querySelector("#content");
  contentElem.textContent = "";

  // Heading
  createDomElem("h1", "menu-heading", contentElem, "Menu");

  // Menu Items div
  const menuItemsDiv = createDomElem("div", "menu-items", contentElem);
  
  // Menu Items elements
  for (let i = 0; i < menuItemsLen; i++) {
    // Menu item
    const itemElem = createDomElem("div", "menu-item-card", menuItemsDiv);
    // Menu item image
    const itemImgElem = createDomElem("img", "menu-item-img", itemElem);
    itemImgElem.src = menuItems[i].image;
    // Menu item title 
    createDomElem("div", "menu-item-title", itemElem, menuItems[i].title);
    // Menu item price
    createDomElem("div", "menu-item-price", itemElem, menuItems[i].price);
  }
}