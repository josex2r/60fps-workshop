let $btnRunTask;
let $progress;
let $tbody;
let progressTimer;

$(document).ready(function() {
  $btnRunTask = $('#btnRunTask');
  $progress = $('#progress');
  $tbody = $('#table tbody');

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

// ===============================
// ==== Write your code here! ====
// ===============================

function renderData(lines) {
  lines.forEach(items => {
    $tbody.append(renderRow(items));
  });
}

function renderRow(items) {
  const $tr = $('<tr>');

  items.forEach(item => {
    const $td = $(`<td>${item}</td>`);

    $tr.append($td);
  });

  return $tr;
}
