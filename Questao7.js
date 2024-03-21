//Pseudocódigo da questão 7 da lista_02

var idade = prompt('insira a sua idade');
idade = 15;

if( idade < 16 ){console.log('Não pode votar');
}


else if(idade >= 16 && idade < 18){console.log('voto facultativo');
}

else{console.log('voto obrigatorio')}
