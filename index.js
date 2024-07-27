//CONTENEDORES DEL AREA DE DESENCRIPTAR
let divDesencriptarLetras = document.querySelector(".contenedor__desencriptar__letras");
let divDesencriptarbotones = document.querySelector(".contenedor__desencriptar__botones");

let texto;
let textoDesencriptado;

//VARIABLE REGEX
const regex = /^[a-z\s]+$/;


//CAMPO DONDE SE COLOCA EL TEXTO A ENCRIPTAR
let areaEncriptar = document.querySelector(".contenedor__texto__encriptar");



//CAMPO DONDE SE COLOCA EL TEXTO A DESENCRIPTAR
let areaResultado = document.querySelector(".contenedor__texto__desencriptar");


//FUNCION PARA LIMPIAR EN EL CAMPO DEL RESULTADO
function colocarResultado(texto){
    areaResultado.value = texto;
    divDesencriptarLetras.style.visibility = "hidden";
    divDesencriptarbotones.style.visibility = "visible";
}


//FUNCION PARA ENCRIPTAR TEXTO
function encriptarTexto(){
    texto="";
    const textoParaEncriptar = areaEncriptar.value.toLowerCase();
    const arrayLetras = Array.from(textoParaEncriptar);
    
    if (regex.test(textoParaEncriptar) && arrayLetras.length > 0){

        for(i=0; i<arrayLetras.length; i++){
            
            //USAMOS UN SWITCH PARA CADA CASO (probando switch)
            switch(arrayLetras[i]) {
                case 'a':  
                    arrayLetras[i] = "ai" 
                    texto += arrayLetras[i];
                    break
            
                case 'e':  
                    arrayLetras[i] = "enter"
                    texto += arrayLetras[i];
                    break

                case 'i':  
                    arrayLetras[i] = "imes"
                    texto += arrayLetras[i];
                    break

                case 'o':  
                    arrayLetras[i] = "ober"
                    texto += arrayLetras[i]; 
                    break

                case 'u':  
                    arrayLetras[i] = "ufat"
                    texto += arrayLetras[i];
                    break
                default:
                    texto += arrayLetras[i];
                break
            }
        
        }

    //LLAMAMOS A LA FUNCION PARA COLOCAL EL TEXTO EN EL AREA DE RESULTADO
    colocarResultado(texto);
}else{
    MensajeError(textoParaEncriptar);   
}
//areaEncriptar.focus();
}


//FUNCION PARA DESEMCRIPTAR TEXTO
function desencriptarTexto() {
    let textoParaDesencriptar = areaEncriptar.value.toLowerCase();
    let arraPalabras = ["ai", "enter", "imes", "ober", "ufat"];
    let arraPalabras2 = ["a", "e", "i", "o", "u"];
    let textoDesencriptado = textoParaDesencriptar;

    if(regex.test(textoDesencriptado) && textoDesencriptado.length > 0){

        for (let i = 0; i < arraPalabras.length; i++) {

            if (textoParaDesencriptar.includes(arraPalabras[i])) {

                textoDesencriptado = textoDesencriptado.replaceAll(arraPalabras[i], arraPalabras2[i]);  
            }
        }
        
        //LLAMAMOS A LA FUNCION PARA COLOCAL EL TEXTO EN EL AREA DE RESULTADO
        colocarResultado(textoDesencriptado)
    }else{
        MensajeError(textoDesencriptado);
    }
}


//FUINCION DE COPIAR EL TEXTO
function copiarTexto(){

    textoCopiado=areaResultado.value;

    if(textoCopiado.length > 0 && regex.test(textoCopiado)){

        navigator.clipboard.writeText(textoCopiado);

            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 1000,
                background:  '#C6F7A8',
            });
            Toast.fire({
                icon: "success",
                title: "Texto Copiado.!"
            });
   }else{
    MensajeError(textoCopiado);
   }
    
}

//FUINCION DE LIMPIAR EL AREA DE TEXTO DE IZQUIERDA 
function limpiarTexto(){

    areaEncriptar.value = "";
}

//FUINCION cambiar de color

let checkbox= document.getElementById("inputCheck");

function cambiaDeColor (){

        if(checkbox.checked){
         document.documentElement.style.setProperty('--color-primario', '#86868B'); //BOTONES
         document.documentElement.style.setProperty('--color-secundario', '#131313'); //FONDO BODY
         document.documentElement.style.setProperty('--color-terciario', '#2B2B2B'); //TEXTAREA
         document.documentElement.style.setProperty('--color-hover', '#84A7A1');  // OVER BOTONES
         document.documentElement.style.setProperty('filter: saturate', '3');
        }
        else{   
        document.documentElement.style.setProperty('--color-primario', '#052051'); 
        document.documentElement.style.setProperty('--color-secundario', '#E9ECF8'); 
        document.documentElement.style.setProperty('--color-terciario', '#FFFFFF'); 
        document.documentElement.style.setProperty('--color-hover', '#0A3871');  
        }
        

}

// FUNCION PARA ARROJAR MENSAJE DE ERROR DEPENDIENDO DE LO QUE ESTE EN EL CAMPO DE TEXTO
function MensajeError(texto){

    

    if (texto.length <= 0){
        
        Swal.fire({
            title: "¡Campo Vacio!",
            text: "✦ Ingresa Texto ✦",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            background:  '#F7B0A8',
          });
          return true;

    }else {
        Swal.fire({
            title: "¡Ups! Algo salio mal",
            text: "INTENTA LO SIGUIENTE: \n ✦ Solo Letras Minusculas \n ✦ No Numeros ✦ No Caracteres especiales o acentos",
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            background:  '#F7B0A8',
          });
          return true;
    }
}



        
        
        
        
        
        






































/*function desencriptarTexto(){
    textoDesencriptado="";
    const textoParaDesencriptar = areaEncriptar.value.toLowerCase();
    const arrayLetras = Array.from(textoParaDesencriptar);
    
    for(i=0; i<arrayLetras.length; i++){
        

        switch(arrayLetras[i]) {
            case 'Ai':  
                arrayLetras[i] = "A" 
                textoDesencriptado += arrayLetras[i];
                break
          
            case 'ENTER':  
                arrayLetras[i] = "E"
                textoDesencriptado += arrayLetras[i];
                break

            case 'IMES':  
                arrayLetras[i] = "I"
                textoDesencriptado += arrayLetras[i];
                break

            case 'OBER':  
                arrayLetras[i] = "O"
                textoDesencriptado += arrayLetras[i]; 
                break

            case 'UFAT':  
                arrayLetras[i] = "U"
                textoDesencriptado += arrayLetras[i];
                break
            default:
                textoDesencriptado += arrayLetras[i];
            break
          }
    
    }
    console.log(arrayLetras);
    ColocarResultadoDesencriptado(textoDesencriptado);
}*/
