const gridContainer = document.querySelector('#grid-container');
const clearButton = document.querySelector('#clear')
const slider = document.getElementById('rez-slider');
const resolution = document.getElementById('resolution');
const appRez = document.getElementById('app-rez');
const movers = document.querySelectorAll('.move');
const zindexers = document.querySelectorAll('.z-adjust');
let ztop = 10;

// Adds listeners that clear the cyan from the gridspaces
const setDraw = function () {
  let cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
      cell.classList.remove('cyan');
      cell.focus();
    });
    cell.addEventListener('focus', () => {
      cell.classList.remove('cyan');
    });
  });
};

// Adds listeners to close windows on click 
const setClosers = function () {
  let closeButtons = document.querySelectorAll('.close');
  closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      let parentWindow = button.getAttribute('data-parent');
      let windowName = button.getAttribute('data-feedback')
      if(confirm('Do you want to give up the ' + windowName + ' window?')){
        document.getElementById(parentWindow).remove();
      }
    });
  });
};;

const makeGrid = function (rez) {
  gridContainer.innerHTML = '';
  let playGrid = document.createElement('div');
  playGrid.id = 'play-grid';
  let rezMax = parseInt(rez) + 1
  let i = 1;
  while (i < (rezMax)) {
    let boxRow = document.createElement('div');
    boxRow.classList = 'row';
    boxRow.id = ('row' + i);
    let j = 1;
    while (j < (rezMax)) {
      boxElement = document.createElement('div');
      boxElement.classList = 'cell cyan';
      boxElement.tabIndex = (i * 100) + j;
      boxElement.id = (i * 100) + j;
      boxRow.append(boxElement);
      j++;
    };
    playGrid.append(boxRow);
    i++;
  };
  appRez.innerHTML = `${slider.value}x${slider.value}`;
  gridContainer.append(playGrid);
  setDraw();
};

clearButton.onclick = () => {
  makeGrid(slider.value);
};

const arrowSetFocus = function (e) {
  let currentID = parseInt(document.activeElement.id);
  let downID = currentID + 100;
  let upID = currentID - 100;
  let rightID = currentID + 1;
  let leftID = currentID - 1;
  switch (e.key) {
    case 'ArrowDown':
      if (document.getElementById(`${downID}`)) {
        e.preventDefault();
        document.getElementById(`${downID}`).focus();
      };
      break;
    case 'ArrowUp':
      if (document.getElementById(`${upID}`)) {
        e.preventDefault();
        document.getElementById(`${upID}`).focus();
      };
      break;
    case 'ArrowRight':
      if (document.getElementById(`${rightID}`)) {
        e.preventDefault();
        document.getElementById(`${rightID}`).focus();
      };
      break;
    case 'ArrowLeft':
      if (document.getElementById(`${leftID}`)) {
        e.preventDefault();
        document.getElementById(`${leftID}`).focus();
      };
      break;
  };
};

resolution.innerHTML = `${slider.value}&nbsp;x&nbsp;${slider.value}`;
appRez.innerHTML = `${slider.value}&nbsp;x&nbsp;${slider.value}`;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  resolution.innerHTML = `${slider.value}x${slider.value}`;
}

makeGrid(slider.value);
document.addEventListener('keydown', arrowSetFocus);

zindexers.forEach((element) => {
  element.addEventListener('mousedown', () => {
    ztop++;
    console.log(element.id, 'is the active window');
    element.style.zIndex = ztop;
  });
});

setClosers();



