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

if (window.location.hash === '#collection') showCollection();

viewCollectionLink.addEventListener('click', () => {
  showCollection();
});

logo.addEventListener('click', () => {
  homePage.style.display = 'flex';
  collectionPage.style.display = 'none';
  history.pushState('', document.title, window.location.pathname);
});
