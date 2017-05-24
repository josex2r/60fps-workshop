let $btnRunTask;
let $progress;
let $table;
let progressTimer;

$(document).ready(function() {
  $btnRunTask = $('#btnRunTask');
  $progress = $('#progress');
  $table = $('#table');

  renderData();

  startTimer();

  startProgressAnimation(5000, startProgressAnimation);
});

function startProgressAnimation(delay, callback) {
  $progress.width('0%');

  $progress.animate({
      width: '100%'
    }, delay, 'linear', () => callback(delay, callback));
}

function renderData(lines) {
  new Array(1000).fill(0).map(() =>
    new Array(5).fill(0).map(Math.random)
  ).forEach(items => {
    $table.append(renderRow(items));
  });
}

function startTimer() {
  const items = $('td');

  setInterval(computeCells(items));
}

function computeCells(items) {
  return () => {
    items.each((idx, element) => {
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
