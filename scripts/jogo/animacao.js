class Animacao {
  
  constructor(imagem,
              posicaoX, variacaoY,
              largura, altura,
              larguraSprite, alturaSprite,
              numberOfSpritesX, numberOfSpritesY) {
    
    this.matriz = [0];
    var yAtual = 0;
    var multiplicadorY = 1;
    var componenteMatriz = 0;
    for(var contadorColuna = 0; contadorColuna < numberOfSpritesY; contadorColuna++) {
      var xAtual = 0;
      var multiplicadorX = 1;
      for(var contadorLinha = 0; contadorLinha < numberOfSpritesX; contadorLinha++) {
        this.matriz[componenteMatriz] = [
          xAtual,
          yAtual
          ];
        componenteMatriz++;
        xAtual = larguraSprite*multiplicadorX;
        multiplicadorX++;
      }
      yAtual = alturaSprite*multiplicadorY;
      multiplicadorY++;
    }
    
    this.imagem = imagem;
    this.posicaoX = posicaoX;
    this.variacaoY = variacaoY;
    this.posicaoY = height - altura - this.variacaoY;
    this.largura = largura;
    this.altura = altura;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;  
    
    this.frameAtual = 0;
  }
  
  exibir() {
    image(this.imagem,
          this.posicaoX, this.posicaoY,
          this.largura, this.altura,
          this.matriz[this.frameAtual][0],
          this.matriz[this.frameAtual][1],
          this.larguraSprite, this.alturaSprite);
    this.animar();
  }
  
  animar() {
    this.frameAtual++;
    this.frameAtual = this.frameAtual % this.matriz.length;
  }
  
}