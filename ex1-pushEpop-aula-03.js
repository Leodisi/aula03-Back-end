const paises = ["Brasil", "Urugauai", "Argentina", "Chile", "Venezuela", "Paraguai"];
const ultimoPais = paises[paises.length - 1];
paises.push ("Bolivia");
console.log(paises);

paises.pop();
console.log(paises);

paises.unshift("Bolivia");
console.log(paises);

paises.shift();
console.log(paises);

console.log(ultimoPais);

console.log(paises[1]);

console.log(paises[2])