function runCode() {
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  var output = document.getElementById("output").contentWindow.document;

  document.body.onkeyup = function() {
    output.open();
    output.writeln(html.value + "<style>" + css.value + "</style>" + "<script>" + js.value + "</script>");
    output.close();
  };
}

runCode();

function downloadCode(filename, content) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

document.getElementById("htmlDownloadButton").addEventListener("click", function(){
    var content = document.getElementById("html").value;
    var filename = "test.html";

    downloadCode(filename, content);
}, false);

document.getElementById("cssDownloadButton").addEventListener("click", function(){
    var content = document.getElementById("css").value;
    var filename = "test.css";

    downloadCode(filename, content);
}, false);

document.getElementById("jsDownloadButton").addEventListener("click", function(){
    var content = document.getElementById("js").value;
    var filename = "test.js";

    downloadCode(filename, content);
}, false);
