# Restaurant-Page

This project is part of The Odin Project's JavaScript curriculum. It's a simple restaurant website that demonstrates the use of modern web development techniques and tools. Live preview: [Restaurant Page](https://ayman-marghani.github.io/Restaurant-Page/)

## Features

- Dynamic content loading for Home, Menu, and Contact pages
- Responsive design
- Module-based JavaScript architecture

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Webpack
- npm

## Learned Skills

- Module bundler: webpack
  - Asset management (CSS, images, data)
  - HTML-webpack-plugin
- ES6 modules
- JavaScript factory functions
- Reusable JavaScript functions across different modules, promoting DRY principles
- Project file organization
- GitHub: .gitignore file usage

## Project Structure
```
Restaurant-Page/
├── dist/
├── src/
├── package.json
├── package-lock.json
├── webpack.config.js
├── README.md
├── .gitignore
```
### Src directory structure
```
src/
├── data
│   └── items.csv
├── img
│   ├── homepage-img.jpg
│   ├── item1.jpg
│   ├── item2.jpg
│   ├── item3.jpg
│   ├── item4.jpg
│   ├── item5.jpg
│   └── item6.jpg
├── modules
│   ├── contact-page-load.js
│   ├── create-dom-element.js
│   ├── initial-page-load.js
│   └── menu-page-load.js
├── index.html
├── index.js
└── style.css
```

## Credits

- Home page image: [Pexels](https://www.pexels.com/photo/table-in-vintage-restaurant-6267/)
- Menu items images: [Allrecipes](https://www.allrecipes.com/)