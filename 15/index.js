const primeiroNome = "Mario";
const sobrenome = "Alves";
const apelido = "Marinho";

if (apelido) {
    console.log(apelido)
} else if (primeiroNome && sobrenome) {
    console.log(primeiroNome + " " + sobrenome)
} else if (primeiroNome) {
    console.log(primeiroNome)
}