//declarando um objeto na notação JSON
var pessoa = {
    //propriedade : valor
    "nome" : "cassiano",
    "idade": 32
}

//obtendo dados do JSON 

console.log("Dados da pessoa: " , pessoa)

//obtendo uma propriedade do projeto pessoa

var idade = pessoa.idade;

console.log("idade da pessoa:" , idade)

pessoa.nome = "josé"

console.log("novo nome da pessoa:" , pessoa.nome )