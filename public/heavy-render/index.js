let $table;

$(document).ready(function() {
  $table = $('#table');

  renderData();

  startTimer();
});

function renderData(lines) {
  new Array(1000).fill(0).map(() =>
    new Array(5).fill(0).map(Math.random)
  ).forEach(items => {
    $table.append(renderRow(items));
  });
}

function startTimer() {
  const items = $('tr');

  setInterval(computeCells(items));
}

function computeCells(items) {
  return () => {
    items.children().each((idx, element) => {
      element.textContent = Math.random();
    });
  };
}

function renderRow(items) {
  const $tr = $('<tr>');

  items.forEach(item => {
    const $td = $(`<td>${item}</td>`);

    $tr.append($td);
  });

  return $tr;
}
