var frutas = '["uva","maça","pera"]'

var frutasObj = JSON.parse(frutas)

console.log(frutasObj[0])

//array de objetos
var populacao = [
    //população[0]
    {"nome": "joão","idade":25},

    //população[1]
    {"nome":"jose","idade":23}
]

console.log(populacao)

//obtendo uma pessoa da população
console.log("população:", populacao[0])

//obtendo uma propriedade de uma pessoa da população
console.log("nome da pessoa:", populacao[1].nome)