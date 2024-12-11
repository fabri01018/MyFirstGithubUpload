let buttons = document.querySelectorAll('button');
let ResultadoFinal = document.getElementById("resultado")


//RESULTADO COMPUTADORA
const opciones = ["piedra","papel","tijera"]

function ResultadoComputadora(){
    return opciones[Math.floor(Math.random()*opciones.length)]
}


//FUNCION PARA COMPARAR LOS RESULTADOS
function DefineResultado(a,b){
    if((a == "piedra" && b == "piedra") || (a == "tijera" && b == "tijera") || (a == "papel" && b == "papel")){
        return "empate";
    }
    else if((a == "tijera" && b == "papel") || (a == "piedra" && b == "tijera") || (a == "papel" && b == "piedra")){
        return "ganaste"
    }
    else if((a == "tijera" && b == "piedra") || (a == "piedra" && b == "papel") || (a == "papel" && b == "tijera")){
        return "perdiste"
    }
}



/*/FUNCION PARA DEFINIR EL GANADOR
buttons.forEach(function(button) {
    button.onclick = function() {
        let MiResultado = button.id; 
        let resultadoComputadora = ResultadoComputadora();
        let resultadoFinal = DefineResultado(MiResultado, resultadoComputadora);

        // Display results
        ResultadoFinal.textContent = resultadoFinal;
    };
});
*/

//FUNCION PARA DEFINIR EL GANADOR
buttons.forEach(function(button) { 
    button.addEventListener("click", function(){
        let MiResultado = button.id; 
        let resultadoComputadora = ResultadoComputadora();     
        let resultadoFinal = DefineResultado(MiResultado, resultadoComputadora);

        
        ResultadoFinal.textContent = resultadoFinal;

    })})


/*Para que puedas manipular el resultado de una funcion puedes ponerla en una variable, yo no queria porque me preguntaba
como la funcion va a iniciar en ese caso
*/