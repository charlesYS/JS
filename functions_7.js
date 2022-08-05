/*
Funções:
Functions
Argumentos e Parâmetros
Retornando valores dentro da função
Outra maneira de entender funções 
Function scope 
Function Hoisting
Arrow Function 
Callback function <--
Constructor Function
*/


//Callback Function


function sayMyName(name){
    console.log("Antes de executar a funcao callback")

    name()

    console.log("Depois da funcao callback")
}

sayMyName(
    () => {
        console.log("Estou em uma callback")
    }
)