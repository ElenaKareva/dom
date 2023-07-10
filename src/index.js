import Rungoblin from './js/app';
import './css/style.css';

window.onload = () => {
  const randomize = new Rungoblin('field', 'hole');
  randomize.showGoblinInterval(600);
};