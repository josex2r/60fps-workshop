let $btnRunTask;
let $progress;
let table;
let progressTimer;

$(document).ready(function() {
  $btnRunTask = $('#btnRunTask');
  $progress = $('#progress');
  table = document.getElementById('table');

  bindRunTask();
  startProgressAnimation(5000, startProgressAnimation);
});

function bindRunTask() {
  $btnRunTask.click(() => {
    getCSV();
  });
}

function startProgressAnimation(delay, callback) {
  $progress[0].style.width ='0%';

  $progress.animate({
      width: '100%'
    }, delay, 'linear', () => callback(delay, callback));
}

function getCSV() {
  $.ajax({
    type: 'GET',
    url: 'https://josex2r.github.io/60fps-workshop/assets/example.csv',
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
    const tr = document.createElement('tr');
    
    row.forEach((column) => {
      const td = document.createElement('td');

      td.innerHTML = column;
      tr.appendChild(td);
    });

    table.appendChild(tr);

    if (index++ < rows.length -1) {
      renderRow(index, rows);
    }
  });
}
