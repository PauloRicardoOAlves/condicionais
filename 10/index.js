const caractere = "u";

if (typeof caractere == 'number') {
    console.log('número')
} else if (caractere == 'A' || caractere == 'E' || caractere == 'I' || caractere == 'O' || caractere == 'U') {
    console.log("Vogal maiúscula")
} else if (caractere == 'a' || caractere == 'e' || caractere == 'i' || caractere == 'o' || caractere == 'u') {
    console.log('vogal minúscula')
} else {
    console.log('Consoante')
}
