let score = '100aac'

console.log(typeof score); //number


let valueInNumber = Number(score) //conversion operator     
console.log(typeof valueInNumber); //number


// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// " " => 0
// "" => 0

let isLoggedIn = ""

// when written 1 or something under string  , it is true
// when written 0 or something under string , it is false



let booleanValue = Boolean(isLoggedIn) //conversion operator
console.log( booleanValue); //boolean



// ******************  Operator  ****************** //

let value= 37
let negValue = -value  //negation operator
console.log(negValue);

let str1 = "Hello"
let str2 = " World"

let str3 = str1 + str2  // concatenation operator
console.log(str3);

console.log( 3 + 2 ); //5 
console.log( '3' + 2 ); //32 , according to string 
console.log( 3 + '2' ); //32 , according to string
console.log( '3' + '2' ); //32  , according to string
console.log(10 + 20 + '30' ); //3030 , first addition is done according to number , second addition is done according to string
console.log( '10' + 20 + 30 ); //102030 , all addition is done according to string bcoz firstly string is there

