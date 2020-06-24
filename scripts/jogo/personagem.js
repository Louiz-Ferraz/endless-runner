class Personagem extends Animacao {
  
  constructor(imagem,
              posicaoX,
              largura, altura,
              larguraSprite, alturaSprite,
              numberOfSpritesX, numberOfSpritesY) {
  super(imagem, posicaoX, largura, altura, larguraSprite, alturaSprite, numberOfSpritesX, numberOfSpritesY);
    
    this.yInicial = height - this.altura;
    this.posicaoY = this.yInicial;
    
    this.velocidadeDoPulo = 0;
    this.gravidade = 7;
  }
  
  pular(velocidadeDoPulo) {
    this.velocidadeDoPulo = - velocidadeDoPulo;        
  }
  
  aplicarGravidade() {
    this.posicaoY = this.posicaoY + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
    if(this.posicaoY > this.yInicial) {
      this.posicaoY = this.yInicial;
    }
  }
  
  verificarColisao(inimigo, precisao) {
    const colisao = collideRectRect(this.posicaoX, this.posicaoY,
                                    this.largura * precisao, this.altura * precisao,
                                    inimigo.posicaoX, inimigo.posicaoY,
                                    inimigo.largura * precisao, inimigo.altura * precisao);
    return colisao;
  }
  
  verificarColisaoChao(posicaoXPersonagem) {
    const colisao = collideRectRect(this.posicaoX, this.posicaoY,
                                    this.largura, this.altura,
                                    posicaoXPersonagem, height,
                                    0, 0);
    return colisao;
  }
  
}