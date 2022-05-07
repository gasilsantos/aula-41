//string contendo JSON 
const dado = '{"nome":"joão", "idade":30, "carro":"classe c coupe novo"}';

//conversão de string para objeto
const pessoa = JSON.parse(dado);

//imprimindo o NOME das propriedades
for (const prop in  pessoa){
    console.log("propriedade:",prop);
}

//imprimindo o VALOR das propriedades do objeto
for (const prop in  pessoa){
    console.log("valor:",pessoa[prop]);
}