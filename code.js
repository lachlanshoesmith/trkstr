const viewCollectionLink = document.getElementById('viewCollectionLink');
const homePage = document.getElementById('home');
const collectionPage = document.getElementById('collection');
const logo = document.getElementById('logo');
const leftDecorativeColumn = document.getElementById('leftDecorativeColumn');
const rightDecorativeColumn = document.getElementById('rightDecorativeColumn');

let page = '';

/**
 * Displays the collection page and hides the home page.
 */
const showCollection = () => {
  homePage.style.display = 'none';
  collectionPage.style.display = 'flex';
};

const showHome = () => {
  homePage.style.display = 'flex';
  collectionPage.style.display = 'none';
};

const checkHash = () => {
  if (window.location.hash === '#collection') {
    showCollection();
    page = 'collection';
    viewCollectionLink.innerText = 'View pieces';
    viewCollectionLink.setAttribute('href', '#');
  } else {
    showHome();
    page = 'home';
    viewCollectionLink.innerText = 'View collection';
    viewCollectionLink.setAttribute('href', '#collection');
  }
};

checkHash();

window.onhashchange = () => {
  checkHash();
};

window.addEventListener('popstate', () => {
  checkHash();
});

logo.addEventListener('click', () => {
  showHome();
});

/**
 * Creates a new element of the specified type and appends it to the specified parent element.
 *
 * @param {string} element - The type of element to create.
 * @param {HTMLElement} parent - The parent element to append the new element to.
 * @param {object} attributes - An object containing the attributes to set on the new element.
 */
const createAndAppend = (element, parent, attributes) => {
  const newElement = document.createElement(element);
  parent.appendChild(newElement);
  for (const attribute in attributes) {
    newElement.setAttribute(attribute, attributes[attribute]);
  }
};

const images = [
  'assets/flat/IMG_0952.webp',
  'assets/flat/IMG_0954.webp',
  'assets/flat/IMG_0962.webp',
  'assets/flat/IMG_0965.webp',
  'assets/flat/IMG_0968.webp',
  'assets/flat/IMG_0970.webp',
];

for (let i = 0; i < 100; i++) {
  const imageIndex = Math.floor(Math.random() * 6);
  const image = images[imageIndex];
  const leftRange = Math.floor(Math.random() * 20 - 5);
  const rightRange = Math.floor(Math.random() * (74 - 20) + 75);

  let leftPercentage;
  let topPercentage = Math.floor(Math.random() * (100 + 5) - 5);
  let decorativeColumn;

  // determine position
  const position = Math.floor(Math.random() * 2);
  if (position === 0) {
    leftPercentage = leftRange;
    decorativeColumn = leftDecorativeColumn;
  } else if (position === 1) {
    leftPercentage = rightRange;
    decorativeColumn = rightDecorativeColumn;
  }

  createAndAppend('img', decorativeColumn, {
    class: 'sideHomeImage floating',
    src: image,
    'aria-hidden': true,
    style: `left: ${leftPercentage}%; top: ${topPercentage}%;`,
  });
}
