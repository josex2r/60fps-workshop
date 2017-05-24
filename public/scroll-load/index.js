let $btnRunTask;
let $progress;
let $table;
let progressTimer;
const lines = [];
let currentLine = 0;

$(document).ready(function() {
  $btnRunTask = $('#btnRunTask');
  $progress = $('#progress');
  $table = $('#table');

  getCSV();

  window.addEventListener('scroll', checkScroll);
});

function getCSV() {
  $.ajax({
    type: 'GET',
    url: '/assets/example.csv',
    dataType: 'text',
    success: processData
  });
}

function processData(allText) {
  var allTextLines = allText.split(/\r/);
  var headers = allTextLines[0].split(',');

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

  checkScroll();
}

function checkScroll() {
  const $wrapper = document.body;

  if (currentLine < lines.length && document.body.scrollHeight - window.outerHeight - 600 <= $wrapper.scrollTop) {
    renderLine(lines[currentLine]);
    currentLine++;
    checkScroll();
  }
}

function renderLine(items) {
  $table.append(renderRow(items));
}

function renderRow(items) {
  const $tr = $('<tr>');

  items.forEach(item => {
    const $td = $('<td>');

    item.split('').forEach((char) => {
      let $span = $('<span>');

      $td.append($span);

      new Array(10).fill(0).forEach(() => {
        const $tmp = $('<span>');

        $span.append($tmp);

        $span = $tmp;
      });

      $span.text(char);
    })

    $tr.append($td);
  });

  return $tr;
}
