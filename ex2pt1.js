//Lab 1 - Part 2 a
//This output on the console the frase as an arrow function!
const SayData =()=>{
    console.log("Data Representation & Querying");
}
SayData();

//Lab 1 - Part 2 b
//This arrow function output a specif value to the console - Hello World!
let SayDatWithArg = (myvalue)=>{
    console.log(myvalue);
}
SayDatWithArg("Hello World");

//Lab 1 - Part 2 c
//This arrow function takes arguments, sum the numbers and output the result to the console.
var NumberSum = (myvalue1, myValue2)=>{
    console.log(myvalue1 + myValue2);
}
NumberSum(2, 3);

//Lab 1 - Part 2 d
//This arrow function multiplies the numbers on the map by 2 IF number is under 70

var NumberMult = ()=>{
    
    const myNumbers = [25, 31, 42, 77];
    for(var i =0; i <= myNumbers.length; i++)
      {
            if(myNumbers[i] < 70 )
            {
                console.log("My number " + i + " multiplied by 2 is: " + myNumbers[i] * 2);
            }
        }
    }
NumberMult();

//onst ages [25, 31, 42, 77];
//let patD = ages.map((item) => {
//return item *2 ;
// });
// console.log(partD);