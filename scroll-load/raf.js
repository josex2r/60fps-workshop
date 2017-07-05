let table;
const lines = [];
let currentLine = 0;

function renderLine(items) {
  table.appendChild(renderRow(items));
}

function renderRow(items) {
  const tr = document.createElement('tr');

  items.forEach(item => {
    const td = document.createElement('td');

    item.split('').forEach((char) => {
      let span = document.createElement('span');

      td.appendChild(span);

      new Array(10).fill(0).forEach(() => {
        const tmp = document.createElement('span');

        span.appendChild(tmp);

        span = tmp;
      });

      span.textContent = char;
    })

    tr.appendChild(td);
  });

  return tr;
}

function getCSV() {
  $.ajax({
    type: 'GET',
    url: 'https://josex2r.github.io/60fps-workshop/assets/example.csv',
    dataType: 'text',
    success: processData
  });
}

function parseData(allText) {
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
}

// =================================
// ======= Modify from here! =======
// =================================

let loading = false;

$(document).ready(function() {
  table = document.querySelector('#table tbody');

  getCSV();

  window.addEventListener('scroll', () => {
    if (!loading) {
      requestAnimationFrame(checkScroll);
    }
  });
});


function processData(allText) {
  parseData(allText);

  requestAnimationFrame(checkScroll);
}

function checkScroll() {
  const wrapper = document.body;

  if (currentLine < lines.length &&
    document.body.scrollHeight - window.outerHeight - 600 <= wrapper.scrollTop) {
    loading = true;
    renderLine(lines[currentLine]);
    currentLine++;
    requestAnimationFrame(checkScroll);
  } else {
    loading = false;
  }
}

