require('./index.css');

module.exports = function () {
  var element = document.createElement('h1');

  element.innerHTML = 'Good Times Good People';

  return element;
};
