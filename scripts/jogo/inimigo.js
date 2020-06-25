class Inimigo extends Animacao {
  
  constructor(imagem,
              posicaoX, variacaoY,
              largura, altura,
              larguraSprite, alturaSprite,
              numberOfSpritesX, numberOfSpritesY,
              velocidade, delay) {
    super(imagem, posicaoX, variacaoY, largura, altura, larguraSprite, alturaSprite, numberOfSpritesX, numberOfSpritesY);
    
    this.velocidade = velocidade;
    this.delay = delay;
    this.posicaoX = width + this.delay;
}

mover() {
  this.posicaoX = this.posicaoX - this.velocidade;
  if(this.posicaoX < - this.largura - this.delay) {
     this.posicaoX = width;       
  }
}

}