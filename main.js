function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio);
    if(elemento === null){
        alert('Elemento não encontrado');
} 
if(elemento != NULL && elemento.localName === 'audio'){
    elemento.play();
} else {
    alert('Elemento não encontrado');
}   
const listaDeTeclas = document.querySelectorAll('.tecla');
}
let contador = 0;
//Estrutura de repetição - Enquanto
while(contador <listaDeTeclas.length){}
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${istrumento}`;

        console.log(idAudio);

        tecla.onclick = function(){
        tocaSom(idAudio);
    };
    tecla.onkeydown = function(evento){
        if(evento.code ==='Enter'|| evento.code ==='Space'){
        tecla.classList.add('ativa');
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
        console.log(instrumento);
    console.log(contador)
}
