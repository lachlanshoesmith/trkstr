const viewCollectionLink = document.getElementById('viewCollectionLink');
const homePage = document.getElementById('home');
const collectionPage = document.getElementById('collection');
const logo = document.getElementById('logo');

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
  history.pushState('', document.title, window.location.pathname);
};

const checkHash = () => {
  if (window.location.hash === '#collection') {
    showCollection();
  } else {
    showHome();
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
