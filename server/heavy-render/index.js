let table;

$(document).ready(function() {
  table = document.querySelector('#table tbody');

  renderData();

  startTimer();
});

function renderRow(items) {
  const tr = document.createElement('tr');

  items.forEach(item => {
    const td = document.createElement('td');

    td.textContent = item;

    tr.appendChild(td);
  });

  return tr;
}

function renderData(lines) {
  new Array(1000).fill(0).map(() =>
    new Array(5).fill(0).map(Math.random)
  ).forEach(items => {
    table.appendChild(renderRow(items));
  });
}

// =================================
// ======= Modify from here! =======
// =================================

function startTimer() {
  const items = document.querySelectorAll('tr');

  setInterval(computeCells(items));
}

function computeCells(items) {
  return () => {
    $(items).children().each((idx, element) => {
      element.textContent = Math.random();
    });
  };
}

