let imagemCenario;
let imagemPersonagem;
let cenario;
let somDoJogo;
let personagem;
var sizeOfSpriteX = 238;
var sizeOfSpriteY = 405;
var numberOfSpritesX = 3;
var numberOfSpritesY = 2;
var velocidade = 10;
var tamanhoDoPersonagem = 0.7;

function preload() {
  imagemCenario = loadImage('imagens/cenario/caverna.png');
  imagemPersonagem = loadImage('imagens/personagem/predator_run.png');
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
  personagem.exibir(tamanhoDoPersonagem);
}
