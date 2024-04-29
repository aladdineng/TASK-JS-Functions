/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
function printname (){
    console.log("Aladdin ")
}
printname()


/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge (BHD){
    return BHD
}
console.log(28 + " years old" )


/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printhello(name , language){
    if ( language == "en"){
        console.log("Hello " + name )
    }
else if (language == "es"){
    console.log("Holla "+name)
}
else if (language == "fr"){
    console.log("Bonjour "+name)
}
else if( language == "te"){
    console.log("Merhaba " + name )
}
}

printhello("aladdin", "es")


/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax (num1 , num2 ){

    if (num1 > num2){
        console.log("This Number is Bigger: "+ num1)
    }
    else 
        console.log("The Bigger Number is : "+ num2 )
    
}
printMax(5 , 15)
