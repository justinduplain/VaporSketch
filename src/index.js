
let qty = 5;
let box = "<div class='cell'>&nbsp;</div>";
let boxElements = '';

const makeBoxes = function (qty) {
  let i = 0;
  while (i < qty) {
    boxElements = boxElements + box;
    i++;
  }
};

const makeGrid = function (qty) {
  makeBoxes(qty);
  let playGrid = document.createElement('div');
  playGrid.classList = 'grid-container';
  let i = 0;
  while (i < qty) {
    let boxRow = document.createElement('div');
    boxRow.classList = 'row';
    boxRow.innerHTML = `${boxElements}`;
    playGrid.append(boxRow);
    i++;
  };
  document.querySelector('#app').append(playGrid);
};

makeGrid(qty);

var cells = document.querySelectorAll('.cell');

cells.forEach((cell) => {
  cell.addEventListener('mouseover', () => {
      cell.classList.add('black');
    });
  });