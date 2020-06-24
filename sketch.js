let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let somDoJogo;
let somDoPulo;

let cenario;
let personagem;
let inimigo;

const velocidadeCenario = 10;
const velodidadePulo = 50;

const posicaoXPersonagem = 50;
const sizeOfSpriteXPersonagem = 238;
const sizeOfSpriteYPersonagem = 405;
const tamanhoPersonagem = 0.7;
const numberOfSpritesXPersonagem = 3;
const numberOfSpritesYPersonagem = 2;

const sizeOfSpriteXInimigo = 104;
const sizeOfSpriteYInimigo = 100;
const tamanhoInimigo = 1.2;
const numberOfSpritesXInimigo = 4;
const numberOfSpritesYInimigo = 7;
const precisaoInimigo = 0.7;

var limitePulo = 0;

function preload() {
  imagemCenario = loadImage('imagens/cenario/caverna.png');
  imagemPersonagem = loadImage('imagens/personagem/predator_run.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, velocidadeCenario);
  frameRate(20);
  personagem = new Personagem(imagemPersonagem,
                              posicaoXPersonagem,
                              sizeOfSpriteXPersonagem*tamanhoPersonagem, sizeOfSpriteYPersonagem*tamanhoPersonagem,
                              sizeOfSpriteXPersonagem, sizeOfSpriteYPersonagem,
                              numberOfSpritesXPersonagem, numberOfSpritesYPersonagem);
  inimigo = new Inimigo(imagemInimigo,
                        width - sizeOfSpriteXInimigo,
                        sizeOfSpriteXInimigo*tamanhoInimigo, sizeOfSpriteYInimigo*tamanhoInimigo,
                        sizeOfSpriteXInimigo, sizeOfSpriteYInimigo,
                        numberOfSpritesXInimigo, numberOfSpritesYInimigo);
  somDoJogo.loop();
}

function keyPressed() {
  if(key === 'ArrowUp' || key === 'Enter') {
    if(limitePulo < 2) {
      personagem.pular(velodidadePulo);
      somDoPulo.play();
      limitePulo++;
      console.log(limitePulo);
    }
  }
}

function draw() {
  cenario.exibir();
  cenario.mover();
  
  personagem.exibir();
  personagem.aplicarGravidade();
  
  inimigo.exibir();
  inimigo.mover();
  
  if(personagem.verificarColisao(inimigo, precisaoInimigo)) {
    //console.log('colidiu');
    noLoop();
  }
  
  if(personagem.verificarColisaoChao(posicaoXPersonagem)) {
    limitePulo = 0;
    //console.log('colidiu com chão');
  }
  
}
