// JS modules
import InitialPageLoad from "./modules/Initial-page-load";
import ContactPageLoad from "./modules/contact-page-load";
import MenuPageLoad from "./modules/menu-page-load";
// CSS styles file
import './style.css';
// Items data (title, price)
import ItemsData from './data/items.csv';
// Images
import homePageImg from './img/restaurant-image.jpg';
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
InitialPageLoad(homePageImg);

// Buttons event listeners
homeBtn.addEventListener("click", () => InitialPageLoad(homePageImg));
contactBtn.addEventListener("click", () => ContactPageLoad());
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
  
  MenuPageLoad(menuItems);
});