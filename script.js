const ruleta = document.querySelector('#ruleta');

ruleta.addEventListener('click', girar);
giros = 0;
function girar(){
  if (giros >= 100){
 alert ("Ya haz completado todos los tiros")
  }else{
  if (giros < 100) {
    let rand = Math.random() * 7200;
    calcular(rand);
    giros++;
    console.log(giros)
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
        giros = 0;
         document.querySelector('.elije').innerHTML = 'TU CORTESIA ES: ';   
      }
    })
  }
}
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
      title: 'Eres ganadorww  a de ' + premios,
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
     premio("FRUTA #1");
     break;
     case valor > 45 && valor <= 90:
     premio("BESO #2");
     break;
     case valor > 90 && valor <= 135:
     premio("NUTELLA #3"); 
     break; 
     case valor > 135 && valor <= 180:
     premio("FOTO #4");
     break;
     case valor > 180 && valor <= 225:
     premio("HORNITO #5");
     break; 
     case valor > 225 && valor <= 270:
     premio("BESO #6");
     break;
     case valor > 270 && valor <= 315:
     premio("POPSY #7");
     break;
     case valor > 315 && valor <= 336:
      premio("PERDISTE BONO #8"); 
     break;
     case valor > 336 && valor <= 360:
     premio("GANASTE BONO #8"); 
     break;
  
     
  }

 }, 5000);

}

