const section = document.querySelector('.section');
const content = document.getElementById('content');

window.addEventListener('load', function(){
    section.style.height =  window.innerHeight + 'px';

    content.style.height = window.innerHeight / 1.2 + 'px';
    content.style.width = window.innerWidth / 1.2 + 'px';
})
window.addEventListener('resize', function(){
    section.style.height =  window.innerHeight + 'px';

    content.style.height = window.innerHeight / 1.2 + 'px';
    content.style.width = window.innerWidth / 1.2 + 'px';
})