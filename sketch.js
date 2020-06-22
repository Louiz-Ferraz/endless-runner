let imagemCenario;
let imagemPersonagem;
let cenario;
let somDoJogo;
let personagem;
var sizeOfSpriteX = 32;
var sizeOfSpriteY = 44;
var numberOfSpritesX = 4;
var numberOfSpritesY = 1;
var velocidade = 5;

function preload() {
  imagemCenario = loadImage('imagens/cenario/caverna.png');
  imagemPersonagem = loadImage('imagens/personagem/storm_trooper_correndo.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, velocidade);
  frameRate(20);
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
