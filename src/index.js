// JS modules
import createDomElem from "./modules/create-dom-element";
import InitialPageLoad from "./modules/initial-page-load";
import ContactPageLoad from "./modules/contact-page-load";
import MenuPageLoad from "./modules/menu-page-load";
// CSS styles file
import './style.css';
// Items csv data file (title, price)
import ItemsData from './data/items.csv';
// Images
import homePageImg from './img/homepage-img.jpg';
import item1Img from './img/item1.jpg';
import item2Img from './img/item2.jpg';
import item3Img from './img/item3.jpg';
import item4Img from './img/item4.jpg';
import item5Img from './img/item5.jpg';
import item6Img from './img/item6.jpg';

// Button elements
const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const contactBtn = document.querySelector(".contact-btn");

// Factory function for creating a menu item
function createMenuItem(title, price, image) {
  return {title, price, image};
}

// Initially load the home page
InitialPageLoad(createDomElem, homePageImg);

// Buttons event listeners
homeBtn.addEventListener("click", () => InitialPageLoad(createDomElem, homePageImg));
contactBtn.addEventListener("click", () => ContactPageLoad(createDomElem));
menuBtn.addEventListener("click", () => {
  let menuItems = [];
  const menuItemsImages = [ 
    item1Img,
    item2Img,
    item3Img,
    item4Img,
    item5Img,
    item6Img
  ];
  
  for (let i = 0; i < 6; i++) {
    const menuItem = createMenuItem(
      ItemsData[i][0], // title
      ItemsData[i][1], // price
      menuItemsImages[i]
    );
    menuItems.push(menuItem);
  }
  
  MenuPageLoad(createDomElem, menuItems);
});