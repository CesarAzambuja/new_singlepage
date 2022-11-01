document.querySelector(".hamburguer").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("show-menu")
})

document.querySelector(".menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("show-menu")
})



function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        
        setTimeout(function(){
            elemento.innerHTML += letra
        }, 95 * (i+20))
    })

    console.log(elemento)
}

const titulo = document.querySelector('.title')
typeWrite(titulo);

