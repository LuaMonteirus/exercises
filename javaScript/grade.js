// Crie um algoritmo que transforme as notas do sistema
// numérico para sistema de notas em caracteres tipo A B C

// * de 90 para cima -   A
// * entre 80 - 89   -   B
// * entre 70 - 79   -   C
// * entre 60 - 69   -   D
// * menor que 60    -   F

function GetScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 90
    let scoreC = score >= 70 && score <= 80
    let scoreD = score >= 60 && score <= 70
    let scoreF = score <= 60 && score >=0

    let result;

    if(scoreA) {
        result = 'A'
    } else if(scoreB) {
        result = 'B'
    } else if(scoreC) {
        result = 'C'
    } else if (scoreD) {
        result = 'D'
    } else if (scoreF) {
        result = 'F'
    } else {
        console.log('Invalid score')
    }
    
    return result
}

console.log(GetScore(-5))
console.log(GetScore(24))
console.log(GetScore(61))
console.log(GetScore(94))
console.log(GetScore(70))
console.log(GetScore(99))
console.log(GetScore(103))
console.log(GetScore(53))
