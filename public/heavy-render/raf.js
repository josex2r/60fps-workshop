let table;
let progressTimer;

$(document).ready(function() {
  table = document.querySelector('#table tbody');

  renderData();

  startTimer();
});

function renderData(lines) {
  new Array(1000).fill(0).map(() =>
    new Array(5).fill(0).map(Math.random)
  ).forEach(items => {
    table.appendChild(renderRow(items));
  });
}

function startTimer() {
  const items = document.querySelectorAll('tr');

  requestAnimationFrame(computeCells(items));
}

const outerHeight = window.outerHeight;

function computeCells(items) {
  return () => {
    const viewportItems = $(items).filter((index, element) => {
      const rect = element.getBoundingClientRect();

      return rect.top <= outerHeight + 300 &&
        rect.bottom >= -1 * 300;
    });

    viewportItems.children().each((idx, element) => {
      element.textContent = Math.random();
    });

    requestAnimationFrame(computeCells(items));
  };
}

function renderRow(items) {
  const tr = document.createElement('tr');

  items.forEach(item => {
    const td = document.createElement('td');

    td.textContent = item;

    tr.appendChild(td);
  });

  return tr;
}
