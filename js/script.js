/*aqui estamos buscando a imagem do mario*/
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

/*essa função irár fazer o mario pular*/
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
    /*setTimeout é uma função que faz alguma coisa e essa funçã é um (tempo),e função ficará anônima, pois ele irá executar o que está pedido*/

    /*Na linha 10 ele vai remover a classe "mario" para que o tempo aconteça no momento que estivermos pressionando a tecla*/
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); /*esse método, ele computa o estilo que foi computado na imagem do mario, e passamos o elemento que queremos computar que é o "mario" e inserimos no parâmetro e com isso conseguimos pegar qualquer propriedade css aplicado no mario que no caso queremos o "bottom"*/

    /*o sinal + ele tenta converter a string para número e muda até a cor no console */

    /*console.log(marioPosition);*/
    console.log('loop')

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none'; /*parando a animaçao */
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none'; /*parando a animaçao */
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'img/gameover.webp';
        mario.style.width = '95px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
        /*aqui ele apaga o intervalo do loop */
    }

}, 10);

document.addEventListener('keydown', jump)
/*addEventListener ele é um escutador de eventos,
ou seja aqui ele irá escutar o que o teclado irá fazer*/


