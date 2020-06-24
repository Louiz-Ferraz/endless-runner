let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let somDoJogo;

let cenario;
let personagem;
let inimigo;

var velocidadeCenario = 10;

var posicaoXPersonagem = 50;
var sizeOfSpriteXPersonagem = 238;
var sizeOfSpriteYPersonagem = 405;
var tamanhoPersonagem = 0.7;
var numberOfSpritesXPersonagem = 3;
var numberOfSpritesYPersonagem = 2;

var sizeOfSpriteXInimigo = 104;
var sizeOfSpriteYInimigo = 100;
var tamanhoInimigo = 1.2;
var numberOfSpritesXInimigo = 4;
var numberOfSpritesYInimigo = 7;


function preload() {
  imagemCenario = loadImage('imagens/cenario/caverna.png');
  imagemPersonagem = loadImage('imagens/personagem/predator_run.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
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

function keypress() {
  
}

function draw() {
  cenario.exibir();
  cenario.mover();
  
  personagem.exibir();
  
  inimigo.exibir();
  inimigo.mover();
}
