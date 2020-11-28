import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import 'bootstrap';
import './scss/_custom.scss';
function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Cool', 'webpack is now Hot Reloading again '], ' ');
  element.classList.add('display-1');
  const myIcon = new Image();
  myIcon.src = Icon;
  const faIcon = document.createElement('i');
  faIcon.classList.add('fa');
  faIcon.classList.add('fa-ad');
  element.append(faIcon);  
  return element;
}

document.body.appendChild(component());