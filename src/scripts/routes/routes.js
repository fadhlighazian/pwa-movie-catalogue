// const { default: Detail } = require('../views/pages/detail');
// const { default: NowPlaying } = require('../views/pages/now-playing');
// const { default: Upcoming } = require('../views/pages/upcoming');
import NowPlaying from '../views/pages/now-playing';
import Upcoming from '../views/pages/upcoming';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': NowPlaying, // default page
  '/now-playing': NowPlaying,
  '/upcoming': Upcoming,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;

// berisi URL dan halaman yg ingin dimunculkan pada URL
