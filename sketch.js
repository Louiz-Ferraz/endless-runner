let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let somDoJogo;
let somDoPulo;

let cenario;
let personagem;
let inimigo;
let inimigoGrande;
let inimigoVoador;

const velocidadeCenario = 10;
const velodidadePulo = 60;

const variacaoY = 20;

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

const sizeOfSpriteXInimigoGrande = 400;
const sizeOfSpriteYInimigoGrande = 400;
const tamanhoInimigoGrande = 1;
const numberOfSpritesXInimigoGrande = 5;
const numberOfSpritesYInimigoGrande = 5;
const precisaoInimigoGrande = 0.3;

const sizeOfSpriteXInimigoVoador = 200;
const sizeOfSpriteYInimigoVoador = 150;
const tamanhoInimigoVoador = 1.2;
const numberOfSpritesXInimigoVoador = 3;
const numberOfSpritesYInimigoVoador = 5;
const precisaoInimigoVoador = 0.5;

const inimigos = [];

var limitePulo = 0;

function preload() {
  imagemCenario = loadImage('imagens/cenario/caverna.png');
  imagemPersonagem = loadImage('imagens/personagem/predator_run.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha2.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, velocidadeCenario);
  frameRate(20);
  
  personagem = new Personagem(imagemPersonagem,
                              posicaoXPersonagem, variacaoY,
                              sizeOfSpriteXPersonagem*tamanhoPersonagem, sizeOfSpriteYPersonagem*tamanhoPersonagem,
                              sizeOfSpriteXPersonagem, sizeOfSpriteYPersonagem,
                              numberOfSpritesXPersonagem, numberOfSpritesYPersonagem);
  const inimigo = new Inimigo(imagemInimigo,
                        width - sizeOfSpriteXInimigo, variacaoY,
                        sizeOfSpriteXInimigo*tamanhoInimigo, sizeOfSpriteYInimigo*tamanhoInimigo,
                        sizeOfSpriteXInimigo, sizeOfSpriteYInimigo,
                        numberOfSpritesXInimigo, numberOfSpritesYInimigo,
                        25, 120);
  const inimigoGrande = new Inimigo(imagemInimigoGrande,
                      width - sizeOfSpriteXInimigoGrande, -30,
                      sizeOfSpriteXInimigoGrande*tamanhoInimigoGrande, sizeOfSpriteYInimigoGrande*tamanhoInimigoGrande,
                      sizeOfSpriteXInimigoGrande, sizeOfSpriteYInimigoGrande,
                      numberOfSpritesXInimigoGrande, numberOfSpritesYInimigoGrande,
                      25, 3500);
  const inimigoVoador = new Inimigo(imagemInimigoVoador,
                      width - sizeOfSpriteXInimigoVoador, 300,
                      sizeOfSpriteXInimigoVoador*tamanhoInimigoVoador, sizeOfSpriteYInimigoVoador*tamanhoInimigoVoador,
                      sizeOfSpriteXInimigoVoador, sizeOfSpriteYInimigoVoador,
                      numberOfSpritesXInimigoVoador, numberOfSpritesYInimigoVoador,
                      25, 2650);
  
  inimigos.push(inimigo);
  inimigos.push(inimigoGrande);
  inimigos.push(inimigoVoador);
  
  somDoJogo.loop();
}

function keyPressed() {
  if(key === 'ArrowUp' || key === 'Enter') {
    if(limitePulo < 2) {
      personagem.pular(velodidadePulo);
      somDoPulo.play();
      limitePulo++;
      //console.log(limitePulo);
    }
  }
}

function draw() {
  cenario.exibir();
  cenario.mover();
  
  personagem.exibir();
  personagem.aplicarGravidade();

  inimigos.forEach(inimigo => {
    inimigo.exibir();
    inimigo.mover();
  
    if(personagem.verificarColisao(inimigo, precisaoInimigo)) {
      //console.log('colidiu');
      noLoop();
    }
  })
  
  if(personagem.verificarColisaoChao(posicaoXPersonagem)) {
    limitePulo = 0;
    //console.log('colidiu com chão');
  }
  
}
