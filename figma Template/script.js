let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobile = document.querySelector('.mobile');


hamberger.addEventListener('click', function(){
    mobile.classList.add('open');

});

times.addEventListener('click', function(){
    mobile.classList.remove('open');

});


