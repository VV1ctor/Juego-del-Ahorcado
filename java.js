let palabrita;
let cant_errores = 0;
let cant_aciertos = 0;

const palabras = [ "Amarillo", "Departamento", "Ventilador", "Vampiro", "Victor", "Giuliana", "Zapatilla", "Remera", "Microfono"];




const btn = document.getElementById("jugar");
const imagen = document.getElementById("imagen");
const btn_letras = document.querySelectorAll("#letras button");

btn.addEventListener("click", iniciar);

function iniciar(event){
    imagen.src = "../AHORCADO/src/img/ahorcado0.jpg";
    btn.disabled = true;
    cant_errores = 0;
    cant_aciertos = 0;

    const parrafo = id("palabraAdivinar");
    parrafo.innerHTML = " ";
    

    const cant_palabras = palabras.length;
    const valor_al_azar = obtener_random( 0, cant_palabras);

    palabrita = palabras [ valor_al_azar ];
    console.log( palabrita );
    const cant_letras = palabrita.length;

    for( let i = 0; i < btn_letras.length ; i++){
      btn_letras[ i ].disabled = false;
    }
  

    for( let i = 0; i < cant_letras; i++){
        const span = document.createElement( "span");
        parrafo.appendChild( span );

    }

}


for(let i = 0; i < btn_letras.length ; i++){
  btn_letras[ i ].addEventListener("click", click_letras);
}

function click_letras(event){
  const spans = document.querySelectorAll("#palabraAdivinar span");
  const button = event.target; 
  button.disabled = true;
  
  const letra = button.innerHTML.toUpperCase();
  const palabra = palabrita.toUpperCase();

  let acerto = false; 
  for( let i = 0; i < palabra.length; i++ ){
    if( letra == palabra[i]){
        spans[i].innerHTML = letra;
        cant_aciertos++;
        acerto = true; 
      }

    }
  
    if(acerto == false){
        cant_errores++;
        const source = `../AHORCADO/src/img/ahorcado0${cant_errores}.jpg`;
        const imagen = id( "#imagen");
        imagen.src = source;
    }
    if(cant_errores == 5){
      id("resultado").innerHTML = "Perdiste, la palabra era" + palabrita;
      game_over();

    }else if( cant_aciertos == palabrita.length)
      id("resultado").innerHTML = "¡Ganaste, juega de nuevo!";
      game_over();

  console.log( palabrita);

}

function game_over(){
  for( let i = 0; i < btn_letras.length ; i++){
    btn_letras[ i ].disabled = true;
  }
  btn.disabled = false; 
}