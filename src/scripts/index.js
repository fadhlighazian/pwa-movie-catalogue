/* eslint-disable no-unused-vars */
import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

// event listener u/ hashchange(ketika url diubah)
window.addEventListener('hashchange', () => {
  app.renderPage();
});

// event listener u/ load(ketika halaman dimuat)
window.addEventListener('load', () => {
  app.renderPage();
});
