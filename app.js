let img0 = document.getElementById('img0');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');

function getFurniture() {
  fetch('catalog.json')
    .then(res => res.json())
    .then(furniture => {
      listFurniture(furniture);
    })
    .catch(err => console.log(err));
}

function listFurniture(data) {
  let listAll = `<div class="list">`;
  let index = 0;
  data.groups.forEach(function(item, index) {
    let price = JSON.stringify(item.price) || JSON.stringify(item.priceRange);
    let img = JSON.stringify(item.hero.href);
    price =
      typeof JSON.parse(price).regular === 'number'
        ? JSON.parse(price).regular
        : JSON.parse(price).selling.high;

    listAll += `  <div class="items">
                    <div class="item-container">
                    <div class="item-desc">
                      <li>${item.name}  $${price}</li>
                    </div>
                      <img id=${index} class="item-img" src=${img}/>
                    </div>
                  </div>
                `;
  });
  listAll += `</div>`;
  document.getElementById('output').innerHTML = listAll;
}

function getImagesForIndex(arr, index = 0) {
  let result = [];
  result[0] = arr[index].thumbnail.href;
  if (arr[index].images && arr[index].images.length) {
    for (var i = 0; i < arr[index].images.length; i++) {
      result[i + 1] = arr[index].images[i].href;
    }
  }
  img1.src = result[1] || result[0];
  img2.src = result[2] || result[0];
  img3.src = result[3] || result[0];
}

function openModal(e) {
  if (e.target.localName === 'img') {
    fetch('catalog.json')
      .then(res => res.json())
      .then(data => {
        getImagesForIndex(data.groups, e.target.id);
      })
      .then((document.getElementById('modal').style.display = 'block'))
      .catch(err => console.log(err));
  }
}

function closeModal(e) {
  if (document.getElementById('modal').style.display !== 'none') {
    document.getElementById('modal').style.display = 'none';
  }
}

document.onkeydown = function(e) {
  if (e.keyCode === 27) {
    closeModal();
  }
};

(function generateMenu() {
  let menu = [
    'Furniture',
    'Outdoor',
    'Rugs + Windows',
    'Bedding',
    'Lighting',
    'Pillows + Decor',
    'Wall Art + Mirrors',
    'Table-Top',
    'Gifts',
    'Sale'
  ];
  menu = menu.map(el => (el = el.toUpperCase()));
  let menuDisplay = '';
  menu.forEach(function(item) {
    menuDisplay += `<span><a href=#>${item}</a></span>`;
  });
  document.getElementById('menu').innerHTML = menuDisplay;
})();

document.addEventListener('DOMContentLoaded', getFurniture);
window.addEventListener('click', closeModal);
window.addEventListener('click', openModal);
