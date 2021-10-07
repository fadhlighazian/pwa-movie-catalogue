const { default: Detail } = require('../views/pages/detail');
const { default: NowPlaying } = require('../views/pages/now-playing');
const { default: Upcoming } = require('../views/pages/upcoming');

const routes = {
  '/': NowPlaying, // default page
  '/now-playing': NowPlaying,
  '/upcoming': Upcoming,
  '/detail/:id': Detail,
};

export default routes;

// berisi URL dan halaman yg ingin dimunculkan pada URL
