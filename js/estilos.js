const boton = document.querySelector('#btndark');
const body = document.querySelector('body');

load();

boton.addEventListener('click', () => {
     body.classList.toggle('darkmode');
     store(body.classList.contains('darkmode'));

});
//leer local storage para ver si existe darkmode, store guardar el valor
function load() {
     const darkmode = localStorage.getItem('darkmode');

     if (!darkmode) {
          store('false');
     } else if (darkmode === 'true'){
          body.classList.add('darkmode');
     } 
         
     }

function store(value) {
     localStorage.setItem('darkmode', value);
}

