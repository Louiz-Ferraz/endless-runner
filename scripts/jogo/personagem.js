class Personagem {
  
  constructor(imagem,
               sizeOfSpriteX, sizeOfSpriteY,
               numberOfSpritesX, numberOfSpritesY, tamanhoDoPersonagem) {
    this.imagem = imagem;
    
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
        xAtual = sizeOfSpriteX*multiplicadorX;
        multiplicadorX++;
      }
      yAtual = sizeOfSpriteY*multiplicadorY;
      multiplicadorY++;
    }
    
    this.frameAtual = 0;
  }
  
  exibir(tamanhoDoPersonagem) {
    var alturaPersonagem = sizeOfSpriteY*tamanhoDoPersonagem;
    var larguraPersonagem = sizeOfSpriteX*tamanhoDoPersonagem;
    image(this.imagem,
          0, height - alturaPersonagem,
          larguraPersonagem, alturaPersonagem,
          this.matriz[this.frameAtual][0],
          this.matriz[this.frameAtual][1],
          sizeOfSpriteX, sizeOfSpriteY);
    this.animar();
  }
  
  animar() {
    this.frameAtual++;
    
    if(this.frameAtual > this.matriz.length - 1) {
      this.frameAtual = 0;
    }
  }
}