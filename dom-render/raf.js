let $btnRunTask;
let $progress;
let $table;
let progressTimer;

$(document).ready(function() {
  $btnRunTask = $('#btnRunTask');
  $progress = $('#progress');
  $table = $('#table');

  bindRunTask();
  startProgressAnimation(5000, startProgressAnimation);
});

function bindRunTask() {
  $btnRunTask.click(() => {
    getCSV();
  });
}

function startProgressAnimation(delay, callback) {
  $progress.width('0%');

  $progress.animate({
      width: '100%'
    }, delay, 'linear', () => callback(delay, callback));
}

function getCSV() {
  $.ajax({
    type: 'GET',
    url: '/assets/example.csv',
    dataType: 'text',
    success: processData
  });
}

function processData(text) {
  const lines = text.split(/\r/).map(line => line.split(','));

  renderData(lines);
}

function renderData(lines) {
  renderRow(0, lines);
}

function renderRow(index, rows) {
  const row = rows[index];

  window.requestAnimationFrame(() => {
    const content = row.reduce((acc, column) => {
      return acc +`<td>${column}</td>`;
    }, '');

    $table.append(`<tr>${content}</tr>`);

    if (index++ < rows.length -1) {
      renderRow(index, rows);
    }
  });
}
