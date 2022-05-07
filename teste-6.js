var pessoa = {
    "nome":"josé",
    "idade": 54
}

console.log("tipo ANTES do stringfy:" , typeof(pessoa))

var pessoa_str = JSON.stringify(pessoa)

console.log("tipo DEPOIS do stringfy:", typeof(pessoa))