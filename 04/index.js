const ladoA = 4;
const ladoB = 4;

//seu código aqui

if (ladoA === ladoB) {
    if (ladoA === 0) {
        console.log('Bucha de branco')
    } else if (ladoA === 1) {
        console.log('Brucha de Ás')
    }
    else if (ladoA === 2) {
        console.log('Brucha de duque')
    } else if (ladoA === 3) {
        console.log('Brucha de terno')
    } else if (ladoA === 4) {
        console.log('Brucha de quadra')
    } else if (ladoA === 5) {
        console.log('Brucha de quina')
    } else if (ladoA === 6) {
        console.log('Brucha de sena')
    }
} else {
    console.log('NÃO')
}