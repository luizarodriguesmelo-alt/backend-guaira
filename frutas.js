const frutas = ["maçã", "banana", "uva", "manga"];
//indice:         0          1      2        3
console.log(frutas)
console.log(frutas[3]);

frutas[0] = "abacaxi";
console.log(frutas);

frutas[2] = "Laranja";
console.log(frutas);

frutas[3] = "abacate";
console.log(frutas);
frutas.push()
frutas.push("figo");

const removido = frutas.pop();
console.log(frutas);
console.log(removido);
frutas.shift();
console.log(frutas);

console.log(frutas.indexOf("cacau"));
console.log(frutas.indexOf("pÊra"));