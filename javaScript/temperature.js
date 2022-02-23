/*
Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/

transformDegree = (degree) => {
    const celsiusExist = degree.toUpperCase().includes('C')
    const fahrenheitExist = degree.toUpperCase().includes('F')

    if(!celsiusExist && !fahrenheitExist) {
        throw new Error('Degree non-defined')
    }

    // ------ transform Fahrenheit to Celsius ------- //

    if(fahrenheitExist) {
        updateDegree = Number(degree.toUpperCase().replace('F', ''));
        equation = (fahrenheit) => (fahrenheit - 32) * 5/9
        degreeSign = 'C'
    }

    // ------ transform Celsius to Fahrenheit ------- //

    if(celsiusExist) {
        updateDegree = Number(degree.toUpperCase().replace('C', ''))
        equation = (celsius) => celsius * 9/5 + 32
        degreeSign = 'F' 
    }

    return equation(updateDegree) + degreeSign
}

try {
    transformDegree('50f')
}

catch (Error) {
    console.log(Error.message)
}

console.log(transformDegree('100f'))
console.log(transformDegree('36C'))