//discussion

/* for(x=0; x<=60; x++) {
    if(x % 2 == 1) {
        console.log(x);
    }
} */

/* for(x=0; x<=60 ; x=x+1) {
    if(x % 2 == 1) {
        console.log(x);
    }
} */



//Question 2


/* let age = 100;

if (age > 0 && age <= 17) {
    console.log("You are underage");
}
else if (age >= 18 && age <= 100) {
    console.log("You are an adult");
}
else {
    console.log("Invalid age");
}
 */

//Question 3

//            0,        1         2        3            4          5      6         7         8      9
 //let names = ["Antony", "Faith", "Brian", "Blessings", "Charles", "Joy", "Knight", "Mercy", "Nguli", "Lisa"]

// console.log (names[4]);


/* console.log (names);

for(let name of names) {
    console.log(name);
}
 */


//Question 4

/* let Persons = [
    {isEmployed : true, isSelfEmployed : false, creditScore : 950, yearsInBusiness : 3}, //property  of person 1 
    {isEmployed : false, isSelfEmployed : true, creditScore : 670, yearsInBusiness : 4}, //property of person 2
    {isEmployed : true, isSelfEmployed : false, creditScore : 500, yearsInBusiness : 2} //property of person 3
];



function eligibiliyForLoan (isEmployed, isSelfEmployed, creditScore, yearsInBusiness) {
    if(Persons == (isEmployed  && creditScore > 700) || (isSelfEmployed && creditScore > 650 && yearsInBusiness > 2)) {
        console.log("elible for loan");
    }
    else {
        console.log("not elible for loan");
    }
}

for(person of Persons) {
    eligibiliyForLoan(person.isEmployed, person.isSelfEmployed, person.creditScore, person.yearsInBusiness);
} */
 
/* function greetings(value) {
    console.log("Hello, " + value);
}

greetings("Antony"); 
 */

//Question 5


/* let a = 15
 let b = 5;
 let c = 20;
 let name = "Kelvin";
 console.log((a > b && !(c < b || name !== "kelvin")) || (a + b * 2 < c && !false));
 */

 //Question 6

function add(a,b) {
    console.log(a + b);
}

add(5, 20);