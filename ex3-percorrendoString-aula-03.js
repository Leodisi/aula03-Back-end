let  palavra = "araraquara";
let contador = 0;

for (let i of palavra) {
    if (i === "a") {
        contador ++;
    }
}

if (contador === 0) {
    console.log(`Não possui nenhuma letra "a".`)
} else if (contador === 1) {
    console.log(`Possui ${contador} letra "a".`)
} else {
    console.log(`possui ${contador} letras "a".`)
}

