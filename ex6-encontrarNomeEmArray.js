const nomes = ["leo","le","João","barbara","sandra"]
let encontrado = false;

for (let i = 0; i < nomes.length; i++) {

    if (nomes[i] === "joão") {
        console.log(`João esta no índice ${i}`)  
        encontrado = true;
        break;    
    } 
}

if (!encontrado) {
    console.log("Não encontrado!")
    
}