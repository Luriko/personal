`use strict`;

const mainPage = document.getElementById('main');
const aboutPage = document.getElementById('about');
const main = document.getElementById('content');
let reader = new FileReader();
aboutPage.addEventListener('click',(e)=>{
    var file = 'about.txt'; 

    var xhr = new XMLHttpRequest();
    xhr.open('GET', file, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var fileContent = xhr.responseText;
        main.innerHTML = fileContent;
      }
    }
    xhr.send();
    e.preventDefault();
})
mainPage.addEventListener('click',(e)=>{
  var file = 'main.txt'; 

  var xhr = new XMLHttpRequest();
  xhr.open('GET', file, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var fileContent = xhr.responseText;
      main.innerHTML = fileContent;
    }
  }
  xhr.send();
  e.preventDefault();

})
