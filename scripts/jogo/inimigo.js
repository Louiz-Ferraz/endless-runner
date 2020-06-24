class Inimigo extends Animacao {
  
    constructor(imagem,
                posicaoX,
                largura, altura,
                larguraSprite, alturaSprite,
                numberOfSpritesX, numberOfSpritesY) {
    super(imagem, posicaoX, largura, altura, larguraSprite, alturaSprite, numberOfSpritesX, numberOfSpritesY);
    this.velocidade = 25;
  }
  
  mover() {
    this.posicaoX = this.posicaoX - this.velocidade;
    if(this.posicaoX < - this.largura) {
       this.posicaoX = width;       
    }
  }
  
}