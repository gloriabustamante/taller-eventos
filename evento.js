document.addEventListener("DOMContentLoaded", function(){

    document.querySelector("div").addEventListener("click", function(){
        alert("Hola! Soy el div")
    })
})

var div = document.querySelector("div");
div.addEventListener("click", funcion(event){
    event.stopPropagation();
})