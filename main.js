function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
} 
const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;
//Estrutura de repetição - Enquanto
while(contador <listaDeTeclas.length){
    const instrumento = listaDeTeclas[contador].classList[1];
    listaDeTeclas[contador].onclick = function(){
        tocaSom('#som_tecla_splash');
    };
    contador = contador + 1;
    const idAudio = `#som_${istrumento}`;
    console.log(instrumento)
}