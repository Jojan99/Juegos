const ruleta = document.querySelector('#ruleta');

ruleta.addEventListener('click', girar);
giros = 1;
function girar(){
  if (giros = 1) {
    let rand = Math.random() * 7200;
    calcular(rand);
    giros++;
    var sonido = document.querySelector('#audio');
    sonido.setAttribute('src', 'sonido/ruleta.mp3');
  }else{
    Swal.fire({
      icon: 'success',
      title: 'VUELVA PRONTO EL JUEGO TERMINO!!',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false
    }).then((result)=>{
      if (result.value == true) {
        giros = 1;    
      }
    })
  }


function premio(premios){

  if(premios == "PIERDES TODO"){
    Swal.fire({
      icon: 'success',
      title: 'Acabas de perder',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false
    })
  }else{
    Swal.fire({
      icon: 'success',
      title: 'Eres ganadora de ' + premios,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false
    })
  }
  document.querySelector('.elije').innerHTML = 'TU PREMIO ES: ' + premios;

}


 function calcular(rand) {

  valor = rand / 360;
  valor = (valor - parseInt(valor.toString().split(".")[0]))* 360;
  ruleta.style.transform = "rotate("+rand+"deg)";

  setTimeout(() => {
  switch (true) {
    case valor > 0 && valor <= 45:
     premio("1");
     break;
     case valor > 45 && valor <= 90:
     premio("2");
     break;
     case valor > 90 && valor <= 135:
     premio("3"); 
     break; 
     case valor > 135 && valor <= 180:
     premio("4");
     break;
     case valor > 180 && valor <= 225:
     premio("5");
     break; 
     case valor > 225 && valor <= 270:
     premio("6");
     break;
     case valor > 270 && valor <= 315:
     premio("7");
     break;
     case valor > 315 && valor <= 360:
     premio("8"); 
     break;
  }

 }, 5000);

}
}