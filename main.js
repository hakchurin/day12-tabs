

var data = {
  Red: {
    title: 'Red',
    body: 'Red is the color of fire and blood, so it is associated with energy, war, danger, strength, power, determination as well as passion, desire, and love. Red is a very emotionally intense color. It enhances human metabolism, increases respiration rate, and raises blood pressure.'
  },
  Green: {
    title: 'Green',
    body: 'Green, the color of life, renewal, nature, and energy, is associated with meanings of growth, harmony, freshness, safety, fertility, and environment. Green is also traditionally associated with money, finances, banking, ambition, greed, jealousy, and wall street'
  },
  Blue: {
    title: 'Blue',
    body: 'Blue is the color of the sky and sea. It is often associated with depth and stability. It symbolizes trust, loyalty, wisdom, confidence, intelligence, faith, truth, and heaven. Blue is considered beneficial to the mind and body. It slows human metabolism and produces a calming effect.'
  }
};


window.addEventListener('hashchange', function() {
  var dataToRender = location.hash.slice(1);
  renderContent(dataToRender);
  if (location.hash === "#Red") {
    renderContent('Red');
  }
});



function renderContent(whatContent) {
  document.querySelector('#content h1').textContent = data[whatContent].title;
  document.querySelector('#content main').textContent = data[whatContent].body;
}

renderContent('Red');
console.log(renderContent('Red'));



window.addEventListener('hashchange', function() {
  var dataToRender = location.hash.slice(1);
  renderContent(dataToRender);
  if (location.hash === "#Green") {
    renderContent('Green');
  }
});


function renderContent(whatContent) {
  document.querySelector('#content h1').textContent = data[whatContent].title;
  document.querySelector('#content main').textContent = data[whatContent].body;
}






window.addEventListener('hashchange', function() {
  var dataToRender = location.hash.slice(1);
  renderContent(dataToRender);
  if (location.hash === "#Blue") {
    renderContent('Blue');
  }
});



function renderContent(whatContent) {
  document.querySelector('#content h1').textContent = data[whatContent].title;
  document.querySelector('#content main').textContent = data[whatContent].body;
}
