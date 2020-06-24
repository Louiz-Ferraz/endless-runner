class Personagem extends Animacao {
  
  constructor(imagem,
                posicaoX,
                largura, altura,
                larguraSprite, alturaSprite,
                numberOfSpritesX, numberOfSpritesY) {
  super(imagem, posicaoX, largura, altura, larguraSprite, alturaSprite, numberOfSpritesX, numberOfSpritesY);
  }
  
  pular() {
    this.posicaoY = this.posicaoY - 50;
  }
}