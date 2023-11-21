//a função deve ser executada é tocaSom, mas que som? Nesse caso será o parametro idElementoAudio. O seja, o endereço da tecla será procurado no html e reproduzido.
function tocaSom(idElementoAudio)
    document.querySelector(idElementoAudio);
//se o elemento pesquisado for igual a "inexistente", o alerta de elemento não encontrado aparecerá.
    if(elemento === null){
        alert('Elemento não encontrado');
} 
//se o elemento existir, a função play daquele elemento acontecerá, ou seja, a tecla será reproduzida.
if(elemento != NULL && elemento.localName === 'audio'){
    elemento.play();
} else {
    alert('Elemento não encontrado');
}   
//querySelector encontra as informaçoẽs da tecla pesquisada no documento
const listaDeTeclas = document.querySelectorAll('.tecla');
//estrutura de repetição - Enquanto
// pars que as tecla não sejam repetidas de maneira infinita, criamos o for, com valor de inicio 0, e valor final chamado <listaDeTeclas. length, para que a repetição seja exatamemnte do tamanhoda nossa lista, que é 9 teclas
let contador = 0;
//Estrutura de repetição - Enquanto
//para que as teclas não sejam repetidas de maneira infinita, criamos o for com valor de inicio 0, e valor final chamado de contador < listaDeteclas.leigth, para que a repetição seja exatamente do tamanho da nossa lista, que é de 9 teclas.
while(contador <listaDeTeclas.length){}
    const tecla = listaDeTeclas[contador]
// classlist armazena todas 01as informações do elemento pesquisado.
    const instrumento = tecla.classList[1];
//o idAudio é responsavel por identificar o som do botão pesquisado.
    const idAudio = `#som_${istrumento}`;

        console.log(idAudio);
//onclick significa "ao clicar na tecla" a função tocaSom será executada, o id daquele audio será buscado e reproduzido.
        tecla.onclick = function(){
        tocaSom(idAudio);
    };
//onkeydown significa "qquando a tecla estiver pressionada", nesse caso uma função será executada, e qual é essa função? É a estilização de mudança de cor do botão quando as teclas Enter e Space foram apertadas 
    tecla.onkeydown = function(evento){
        if(evento.code ==='Enter'|| evento.code ==='Space'){
        tecla.classList.add('ativa');
    }
//onkeyup'significa "quando a tecla estiver erguida. não pressionada", nesse caso , a função será removida.
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
        console.log(instrumento);
    console.log(contador)
}
