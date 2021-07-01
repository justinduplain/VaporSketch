let qty = 100;

const makeGrid = function (qty) {
  let playGrid = document.createElement('div');
  playGrid.classList = 'grid-container';
  let i = 0;
  while (i < qty) {
    let boxRow = document.createElement('div');
    boxRow.classList = 'row';
    let j = 0;
    while (j < qty) {
      boxElement = document.createElement('div');
      boxElement.classList = 'cell';
      boxElement.tabIndex = (i * 100) + j;
      boxRow.append(boxElement);
      j++;
    };
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
  cell.addEventListener('focus', () => {
    cell.classList.add('black');
  });
});