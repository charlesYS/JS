
/*
let family = {
    expenses: [320.32, 128.45, 1500, 1450],
    incomes: [2500, 3200, 250.43, 360, 3500]

}
function sum(array){

    let total = 0;
    

    for(let value of array){
        total += value;
    }

    return total

}
function calculateBalance() {

    const calculateIncomes = sum (family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOkay = total >= 0;

    let balanceText = "Negativo"

    if(itsOkay) {
        balanceText = "Positivo"
    }
    console.log (`Seu saldo é ${balanceText}: ${total}`)
}

calculateBalance()

*/

/*
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahreinheitExists = degree.toUpperCase().includes('F');

    if(!celsiusExists && !fahreinheitExists){
        throw new Error("Grau não identificado")
    }

    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahreinheit) => (fahreinheit - 32) * 5/9
    let degreeSign = 'C'

    if(celsiusExists){

    updatedDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = (celsius) => (celsius * 9/5) + 32
    degreeSign = 'F'

    }

    return formula(updatedDegree) + degreeSign
}
    

    try {
        console.log(transformDegree('50F'))
        console.log(transformDegree('10C'))
        transformDegree('50Z')
    }
    catch (error){
        console.log(error.message)

    }
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [

        ],
    }
]
