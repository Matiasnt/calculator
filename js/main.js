const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn"); //query selector all crea un array con cada uno de los botones

botones.forEach(boton => {
    boton.addEventListener("click" , () => {
        const botonApretado = boton.textContent;

        if(boton.id === "c") {
            pantalla.textContent = "0"; //cuando se utilice la c se vuelve a 0 y el return es para que corte el if y no ocurra lo de abajo
            return;
        }


        if(boton.id ==="borrar") {
            if (pantalla.textContent.length ===1 || pantalla.textContent === ("error")) { //si el text content es igual a 1 le ponemos el 0
                pantalla.textContent = "0";
            } else {
            pantalla.textContent = pantalla.textContent.slice (0, -1) //sino seguimos borrando
            }
            return;
        }


        if (boton.id === "igual") {
            try {
            pantalla.textContent = eval(pantalla.textContent); //evalua lo que se escribio y lo escribe en la pantalla
            } catch {
                pantalla.textContent = "error";
            }
             
            
            return;
        }

        if (pantalla.textContent ==="0"  || pantalla.textContent === ("error") ) {
            pantalla.textContent = botonApretado;
        } else {

        pantalla.textContent += botonApretado; //cuando apretemos cualquier boton se le va a sumar el textcontent
        }
    }) 
})