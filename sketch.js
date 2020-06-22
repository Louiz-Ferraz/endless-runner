let imagemCenario;
let imagemPersonagem;
let cenario;
let somDoJogo;
let personagem;
var sizeOfSpriteX = 220;
var sizeOfSpriteY = 270;
var numberOfSpritesX = 4;
var numberOfSpritesY = 4;
var velocidade = 5;

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, velocidade);
  frameRate(40);
  personagem = new Personagem(imagemPersonagem,
                              sizeOfSpriteX, sizeOfSpriteY,         
                              numberOfSpritesX, numberOfSpritesY);
  somDoJogo.loop();
}

function draw() {
  cenario.exibir();
  cenario.mover();
  personagem.exibir();
}
