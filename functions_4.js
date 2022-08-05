

/*
Funções:
Functions
Argumentos e Parâmetros
Retornando valores dentro da função
Outra maneira de entender funções 
Function scope <--
*/

let subject = "create video"

function createThink(){
    subject = "study"
    return subject  
}

console.log(subject)
console.log(createThink(subject))
/*
let subject = "create video"

function createThink(subject){
    subject = "study"
    return subject  
}

console.log(subject)
console.log(createThink(subject))
*/

/*
let subject

function createThink(){

    subject = "study"

}

console.log(subject)
createThink()
console.log(subject)
*/