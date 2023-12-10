const viewCollectionLink = document.getElementById('viewCollectionLink');
const homePage = document.getElementById('home');
const collectionPage = document.getElementById('collection');
const itemPage = document.getElementById('itemPage');
const logo = document.getElementById('logo');
const leftDecorativeColumn = document.getElementById('leftDecorativeColumn');
const rightDecorativeColumn = document.getElementById('rightDecorativeColumn');

const itemPageImage = document.getElementById('itemPageImage');
const itemPageName = document.getElementById('itemPageName');
const itemPagePrice = document.getElementById('itemPagePrice');
const itemPageDescription = document.getElementById('itemPageDescription');
const itemPageColours = document.getElementById('itemPageColours');
const selectedColourLabel = document.getElementById('selectedColourLabel');
const itemPageSizes = document.getElementById('itemPageSizes');

let page = '';

/**
 * Creates a new element of the specified type and appends it to the specified parent element.
 *
 * @param {string} element - The type of element to create.
 * @param {HTMLElement} parent - The parent element to append the new element to.
 * @param {object} attributes - An object containing the attributes to set on the new element.
 */
const createAndAppend = (element, parent, attributes = {}) => {
  const newElement = document.createElement(element);
  parent.appendChild(newElement);
  for (const attribute in attributes) {
    newElement.setAttribute(attribute, attributes[attribute]);
  }
  return newElement;
};

const items = {
  jacket: {
    name: 'Denim Chore Jacket',
    price: 549.95,
    image: 'assets/flat/IMG_0954.webp',
    colours: [['Space_Blue', '#1f222f']],
    description: [
      '100% Cotton Denim',
      'Oversized Fit',
      'Zip Front',
      'Sleeve Placket',
      'Contrast Check Pockets',
      'Button Collar',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  tshirt: {
    name: 'Oversized Distressed T-Shirt',
    price: 229.95,
    image: 'assets/flat/IMG_0965.webp',
    colours: [['Crimson', '#d31f41']],
    description: [
      '96% Polyester, 4% Elastane',
      'Oversized Fit',
      'Distressed Holes',
      'Double Layered',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  shorts: {
    name: 'Baggy Check Cargo Shorts',
    price: 404.95,
    image: 'assets/flat/IMG_0952.webp',
    colours: [['Crimson', '#d31f41']],
    description: [
      '100% Cotton Yarn/Twill',
      'Loose Fit',
      '3 Different Checks',
      'Box Pleat Pockets',
    ],
    sizes: ['28', '30', '32', '34', '36', '38'],
  },
  vest: {
    name: 'Multi Utility Vest',
    price: 349.95,
    image: 'assets/flat/IMG_0970.webp',
    colours: [['Eggplant', '#341a41']],
    description: [
      '100% Cotton Corduroy',
      'Loose Fit',
      'Contrast Check Pockets',
      'D-ring',
      'Zip Front',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  shirt: {
    name: 'Oversized Love Graffiti Shirt',
    price: 259.95,
    image: 'assets/flat/IMG_0968.webp',
    colours: [['Sky', '#c9d5eb']],
    description: [
      '80% Cotton, 20% Polyester Shirting',
      'Oversized Fit',
      'Contrast Check Pockets',
      'Front Heart Print',
      'Back Text Print',
      'Button Front',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  pants: {
    name: 'Baggy Tie Dye Cargo Pants',
    price: 439.95,
    image: 'assets/flat/IMG_0962.webp',
    colours: [['Cobalt', '#262862']],
    description: [
      '100% Cotton Drill',
      'Loose Fit',
      'Contrast Check Pockets',
      'Adjustable Drawstring Waist',
      'Double Knee Pleats',
    ],
    sizes: ['28', '30', '32', '34', '36', '38'],
  },
};

/**
 * Displays the collection page and hides the home page.
 */
const showCollection = () => {
  homePage.style.display = 'none';
  collectionPage.style.display = 'flex';
  itemPage.style.display = 'none';
};

const showHome = () => {
  homePage.style.display = 'flex';
  collectionPage.style.display = 'none';
  itemPage.style.display = 'none';
};

const showItemPage = (item) => {
  homePage.style.display = 'none';
  collectionPage.style.display = 'none';
  itemPage.style.display = 'flex';

  itemPageImage.setAttribute('src', items[item].image);
  itemPageImage.setAttribute('alt', items[item].name);

  itemPageName.innerText = items[item].name;
  itemPagePrice.innerText = `$${items[item].price}`;

  itemPageDescription.replaceChildren();
  items[item].description.map((desc) => {
    const descriptionItem = createAndAppend('li', itemPageDescription);
    descriptionItem.innerText = desc;
  });

  itemPageColours.replaceChildren();
  colourInputs = [];
  items[item].colours.map((colour) => {
    const colourInput = createAndAppend('input', itemPageColours, {
      type: 'radio',
      name: 'colours',
      value: colour[0],
      id: colour[0],
    });
    const colourLabel = createAndAppend('label', itemPageColours, {
      for: colour[0],
    });
    colourLabel.style.backgroundColor = colour[1];
    colourInputs.push(colourInput);

    colourInput.addEventListener('change', () => {
      updateSelectedColour(colour[0]);
    });
  });
  colourInputs[0].checked = true;
  selectedColourLabel.innerText = items[item].colours[0][0].replace('_', ' ');

  itemPageSizes.replaceChildren();
  items[item].sizes.map((size) => {
    const sizeInput = createAndAppend('input', itemPageSizes, {
      type: 'radio',
      name: 'sizes',
      value: size,
      id: size,
    });
    const sizeLabel = createAndAppend('label', itemPageSizes, {
      for: size,
    });
    sizeLabel.innerText = size;
  });
};

const updateSelectedColour = (selectedColour) => {
  selectedColourLabel.innerText = selectedColour.replace('_', ' ');
};

const checkHash = () => {
  switch (window.location.hash) {
    case '#collection':
      showCollection();
      page = 'collection';
      viewCollectionLink.innerText = 'View pieces';
      viewCollectionLink.setAttribute('href', '#');
      break;
    case '#jacket':
      showItemPage('jacket');
      viewCollectionLink.innerText = 'View pieces';
      viewCollectionLink.setAttribute('href', '#');
      break;
    case '#shorts':
      showItemPage('shorts');
      viewCollectionLink.innerText = 'View pieces';
      viewCollectionLink.setAttribute('href', '#');
      break;
    case '#pants':
      showItemPage('pants');
      viewCollectionLink.innerText = 'View pieces';
      viewCollectionLink.setAttribute('href', '#');
      break;
    case '#tshirt':
      showItemPage('tshirt');
      viewCollectionLink.innerText = 'View pieces';
      viewCollectionLink.setAttribute('href', '#');
      break;
    case '#shirt':
      showItemPage('shirt');
      viewCollectionLink.innerText = 'View pieces';
      viewCollectionLink.setAttribute('href', '#');
      break;
    case '#vest':
      showItemPage('vest');
      viewCollectionLink.innerText = 'View pieces';
      viewCollectionLink.setAttribute('href', '#');
      break;
    default:
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
