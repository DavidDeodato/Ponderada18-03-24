//multiplicação de matrizes, fazendo em pseudocódigo, como orientado na atividade

//primeira matriz

var ColunasDeA

var LinhasDeA

//segunda matriz

var ColunasDeB

var LinhasDeB

Função MultiplicaçãoDeMatrizes(matrizA, matrizB)

//verificando se o numero de colunas de A é idiferente ao numero de linhas de B
    Se (númeroDeColunas(matrizA) ≠ númeroDeLinhas(matrizB)){
        Retorne "Multiplicação não é possível"}
    
    //verificando se o número de colunas da A é igual ao número de linhas de B
Se (ColunasDeA(matrizA) == LinhasDeB(matrizB)){
        
    Para cada linha i de 0 até númeroDeLinhas(matrizA) - 1
        Para cada coluna j de 0 até númeroDeColunas(matrizB) - 1
            Para cada elemento k de 0 até númeroDeColunas(matrizA) - 1
                matrizResultado[i][j] += matrizA[i][k] * matrizB[k][j]

            
    
Fim Função 
}
