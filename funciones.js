
function mostrar(){
    document.querySelector("main").style.display = "";
}


function id(str) {
    return document.getElementById(str);
}

function obtener_random( num_min, num_max ){
    const amplitud_valores = num_max - num_min;
    const valor_al_azar = Math.floor(Math.round(Math.random() * amplitud_valores)) + num_min;
    return valor_al_azar;
}

