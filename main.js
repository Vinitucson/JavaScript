function funcao(){ 
    var vet =[]
    var  i
    for(i=0; i<5;i++){
    var objeto = {}
    // entrada de dados do objeto
    objeto.codigo = Number(prompt("Informe o Código"))
    objeto.nome = prompt("Nome")
    objeto.qtdade = Number(prompt("Quantidade"))
    objeto.preco = Number(prompt("Preço"))
    // entrada dos objetos no vetor
    vet.push(objeto)
}
// calcula o estoque
    var estoque = 0
    for ( i=0;i<5;i++)
    estoque = estoque + vet[i].qtdade
    alert("Quantidade em estoque"+estoque)
    
}
