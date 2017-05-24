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
    url: 'https://josex2r.github.io/60fps-workshop/assets/example.csv',
    dataType: 'text',
    success: processData
  });
}

function processData(allText) {
    var allTextLines = allText.split(/\r/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                tarr.push(/* headers[j]+":"+ */ data[j]);
            }
            lines.push(tarr);
        }
    }
    renderData(lines);
}

function renderData(lines) {
  lines.forEach(items => {
    $table.append(renderRow(items));
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
