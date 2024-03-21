class FormaGeometrica{
    constructor(cor){
        this.cor = cor;
    }

    
    FalarCor(){console.log(`a cor desta forma é ${this.cor}`)}

}

fala1 = new FormaGeometrica('azul');
fala1.FalarCor()

class circulo extends FormaGeometrica{
    constructor(cor,raio){
        super(cor);
        this.raio = raio
    }

    calcularAreaCirculo(){console.log(`\nesta forma é um circulo e sua area é ${3.14*(this.raio**2)}`)}
}
cal = new circulo('vermelho', 2)
cal.calcularAreaCirculo();

class retangulo extends FormaGeometrica{
    constructor(cor,base,altura){
        super(cor);
        this.base = base
        this.altura = altura;
    }

    calcularAreaRetangulo(){console.log(`\nesta forma é um retangulo e sua area é ${this.base*this.altura}`)}
}
retangulo1 = new retangulo('vermelho', 3, 2)
retangulo1.calcularAreaRetangulo();