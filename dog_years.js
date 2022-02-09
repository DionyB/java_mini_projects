let myAge = 8;
// Setting my age as a variable 
let earlyYears = 2;
// specifying the earlyYear variable as the first  two years of a dogs life to indicate they equate to 10.5 years

earlyYears *= 10.5
// calculating the age of a dog the first two years in his life in human years. SInce they equate to 10.5 human years each, we multiply it in place

// given my first two years of life are already estimated i deduct them from my age 
let laterYears = myAge - 2 
// the reamining years will be estimated based on my initial age - 2 
laterYears *= 4 
// laterYears are updated to reflect the remaining dog years in human years, since after the 2 first years of life, the remaining years count for 4 years each
console.log(laterYears)
console.log(earlyYears)

let myAgeInDogYears = laterYears + earlyYears
// to find the final age in dog years, i add the equivalent human years in the first two dog years and the remaining dog years. 

let myName = "ANDREAS".toLowerCase()
// i store my name in a variable all in lowercase characters
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)


