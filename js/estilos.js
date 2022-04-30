const boton = document.querySelector('#botondos');

const configUser = window.matchMedia('(prefers-color-scheme:dark)');

const localconfig = localStorage.getItem('tema');
if(localconfig === 'dark'){
    document.body.classList.toggle('dark-theme')
}else if (localconfig === 'dark'){
    document.body.classList.toggle('light-theme')
}

boton.addEventListener('click', () =>{
   //console.log(configUser.matches)
   let colorTema;
   if(configUser.matches){
       //entramos con modod oscuro
       //acceder clases del body agregar o quitar clases -boton
       document.body.classList.toggle('light-theme');
       boton.classList.toggle('active');
       colorTema =document.body.classList.contains('light-theme') ? 'light' : 'dark'
   }else{
    document.body.classList.toggle('dark-theme'); 
    colorTema =document.body.classList.contains('dark-theme') ? 'dark' : 'light'
   }
   localStorage.setItem('tema', colorTema)

})