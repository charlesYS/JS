/*
Funções:
Functions
Argumentos e Parâmetros
Retornando valores dentro da função
Outra maneira de entender funções 
Function scope 
Function Hoisting
Arrow Function 
Callback function 
Constructor Function <---
*/


//Constructor Function

function Person(name,walk){
    this.name = name
    this.walk = function () {
        return this.name + "está andando"
    }

}

const charles = new Person("Charles")
const gessica = new Person("Gessica")
console.log(charles.walk)
console.log(gessica.walk)
