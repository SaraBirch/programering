// brugte slides
let code = "BINTO1064U.LA_E21"

//opgave 1 Test om der er bogstaver i sekvensen
console.log(/\w/.test(code))

//opagve 2 Test om der er tal i sekvensen
console.log(/\d/.test(code))

//Opgave 3 Prøv at tjekke om det er HA it og print sekvensen ud! (Altså starter det med BINT)
console.log(/\BINT/.test(code))

//Opgave 4 Prøv at printe lokationen for ”_” ud (indexet)
console.log(/\_/.exec(code).index)

// opgave 5 Lave en halvkort kode med kun BINTO og tallene (BINTO1064) Man kan både bruge .match og
var regex = /(\w{4})(U.LA_E21)(.*)/;
code=code.replace(regex, "$1$3")
console.log(code)

// opagve 6 Lave en kortkode med kun BINT og tallene (BINT1064) Man kan både bruge .match og .replace her.
var regex = /(\w{4})(O)(.*)/;
code=code.replace(regex, "$1$3")
console.log(code)

// opgave 7 Prøv at lave en ny kode hvor du udskifter E21 med F22 med .replace (her skal I bruge $n)
var course = "BINTO1064U.LA_E21"
console.log(course.replace("E21", "F22"));