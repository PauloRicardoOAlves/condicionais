//Só é considerado de maior se a idade for maior ou igual a 18.
const idadeDoAluno = 18;

//valor verdadeiro ou falso que informa se possui responsável
const possuiResponsavel = false;

if (idadeDoAluno < 18 && possuiResponsavel == false) {
    console.log('Não é possível fazer a rematrícula')
} else {
    console.log('Matrícula realizada com sucesso')
}