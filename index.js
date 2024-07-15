//CONTENEDORES DEL AREA DE DESENCRIPTAR
let divDesencriptarLetras = document.querySelector(".contenedor__desencriptar__letras");
let divDesencriptarbotones = document.querySelector(".contenedor__desencriptar__botones");

let texto;
let textoDesencriptado;


//CAMPO DONDE SE COLOCA EL TEXTO A ENCRIPTAR
let areaEncriptar = document.querySelector(".contenedor__texto__encriptar");



//CAMPO DONDE SE COLOCA EL TEXTO A DESENCRIPTAR
let areaResultado = document.querySelector(".contenedor__texto__desencriptar");


//fumciom para poner o quitar visibilidad de campos
function visibilityCampos(){
    if(areaResultado !="") {
        divDesencriptarLetras.style.visibility = "visible";
}

}


//FUNCION PARA POSETAR EN EL CAMPO DEL RESULTADO
function colocarResultado(texto){
    areaResultado.value = texto;
    divDesencriptarLetras.style.visibility = "hidden";
    divDesencriptarbotones.style.visibility = "visible";
}


//FUNCION PARA ENCRIPTAR TEXTO
function encriptarTexto(){
    texto="";
    const textoParaEncriptar = areaEncriptar.value.toUpperCase();
    const arrayLetras = Array.from(textoParaEncriptar);
    
    for(i=0; i<arrayLetras.length; i++){
        
        //USAMOS UN SWITCH PARA CADA CASO (probando switch)
        switch(arrayLetras[i]) {
            case 'A':  
                arrayLetras[i] = "Ai" 
                texto += arrayLetras[i];
                break
          
            case 'E':  
                arrayLetras[i] = "ENTER"
                texto += arrayLetras[i];
                break

            case 'I':  
                arrayLetras[i] = "IMES"
                texto += arrayLetras[i];
                break

            case 'O':  
                arrayLetras[i] = "OBER"
                texto += arrayLetras[i]; 
                break

            case 'U':  
                arrayLetras[i] = "UFAT"
                texto += arrayLetras[i];
                break
            default:
                texto += arrayLetras[i];
            break
          }
    
    }

    //LLAMAMOS A LA FUNCION PARA COLOCAL EL TEXTO EN EL AREA DE RESULTADO
    colocarResultado(texto);
}


//FUNCION PARA DESEMCRIPTAR TEXTO
function desencriptarTexto() {
    let textoParaDesencriptar = areaEncriptar.value.toUpperCase();
    let arraPalabras = ["AI", "ENTER", "IMES", "OBER", "UFAT"];
    let arraPalabras2 = ["A", "E", "I", "O", "U"];
    let textoDesencriptado = textoParaDesencriptar;

    for (let i = 0; i < arraPalabras.length; i++) {

        if (textoParaDesencriptar.includes(arraPalabras[i])) {

            console.log(textoDesencriptado);
            textoDesencriptado = textoDesencriptado.replaceAll(arraPalabras[i], arraPalabras2[i]);
            console.log(textoDesencriptado);
        }
    }

    //LLAMAMOS A LA FUNCION PARA COLOCAL EL TEXTO EN EL AREA DE RESULTADO
    colocarResultado(textoDesencriptado)
}


//FUINCION DE COPIAR EL TEXTO
function copiarTexto(){

    textoCopiado=areaResultado.value;
    navigator.clipboard.writeText(textoCopiado);
}

        
        
        
        
        
        






































/*function desencriptarTexto(){
    textoDesencriptado="";
    const textoParaDesencriptar = areaEncriptar.value.toUpperCase();
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
