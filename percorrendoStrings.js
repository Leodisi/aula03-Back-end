const palavra = "Brsil";

let encontrado = false;
for (let i of palavra ) {
    if (i === "a") {
        encontrado = true;
        console.log("Tem a letra a")
        break;
    }
}
if (!encontrado ) {
    console.log("Não tem a letra a")
    console.log(encontrado)
}

