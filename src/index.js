import _ from 'lodash'
import * as utilities from './utilities'
import Tiger from './utilities'

console.log(utilities.NiJou(3));
console.log(Tiger.say());

function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', '!!']
  element.innerHTML = _.join(array, ' ')
  return element;
}

document.body.appendChild(component());