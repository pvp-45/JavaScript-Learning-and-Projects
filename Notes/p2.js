
//1. Ways to print from javascript to webpage
//alert("Ai gayo paacho loda?")
//document.write("this is document write")

//2. Java Script console API
//console.log("Hello World!",4+6,"another log") //normal print message to console
//console.error("this is an error") // error message to console
//console.warn("warning message")  //warning message to console

//3. JavaScript Variables
//What are variables? Containers to store data values
/*
multi
line
comment
*/
var number1 = 34;
var number2 = 56;
// console.log(number1 + number2);

//4. Data types in JavaScript
//Strings
var str1 = "this is a string";
var str2 = 'this is a string';

//Numbers
var num1 = 455;
var num2 = 56.75;

//Object
var marks = 
{
    ravi : 34,
    shubham : 78,
    harry : 99.977
}
// console.log(marks);

//Booleans
var a =true;
var b = false;
// console.log(a,b);

//Undefined 1
var und = undefined;
// console.log(und);

//Undefined 2
var und2;
// console.log(und2);

//Null
var n = null;        //knowingly undefined
// console.log(n);

/*
At a very high level, there are two types in JavaScript
1. Primitive data types : undefined, null, number, string, boolean, symbol
2. Reference data types : Arrays and Objects
*/

//Arrays
var arr = [1,2,3,4,5];
// console.log(arr);
//accessing individual elements 
// console.log(arr[0]);
// console.log(arr[3]);

//5. Operators in JavaScript
//Arithmetic Operators
var a = 100;
var b = 10;
// console.log("The value of a+b is ",a+b);
// console.log("The value of a-b is ",a-b);
// console.log("The value of a*b is ",a*b);
// console.log("The value of a/b is ",a/b);

//Assignmnet Operators
var c = b;
// c+=2; //c=c+2
// c-=2;
// c/=2;
// c*=2;
// console.log(c);

// Comaparision Operators
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x < y);
// console.log(x > y);

//Logical Operators

//Logical AND
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);

//Logical OR
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(false || true);

//Logical NOT
// console.log(!false);
// console.log(!true);

//6. Functions in JavaScript
//DRY = Donot Repeat Yourself
function avg(a,b) {
    c = (a+b)/2;
    return c;
}

c1 = avg(10,20);
c2 = avg(4,6);
// console.log(c1,c2);

//7. Conditionals in JavaScript

var age = 34;
//Single if statement
// if (age > 18){
//     console.log('You are not a kid');
// }

//IF-ELSE statement
// if (age > 18){
//     console.log('You are not a kid');
// }
// else {
//     console.log('You are a kid');
// }

//IF-ELSE Ladder
// if (age > 32)
// {
//     console.log("You are not a kid");
// }
// else if (age > 22)
// {
//     console.log ("bacche nahi rahe");
// }
// else{
//     console.log('You are a kid');
// }
// console.log('End of ladder');

//8. Loops in JavaScript
var arr = [1,2,3,4,5,6,7];
// console.log(arr);

//A. FOR LOOP
// for (var i=0;i<arr.length;i++)
// {
//     console.log (arr[i]);
// }

//Second Method to Loop the array arr
// arr.forEach(function(element){
//    console.log(element)
// })

//B. WHILE loop

// const ac = 0;
// ac++;

let j = 0;
// while (j < arr.length)
// {
//     console.log(arr[j]);
//     j++;
// }

//C. DO-WHILE loop
// do{
      
//    console.log(arr[j]);
//    j++;

// }while (j<arr.length);

//9. Break and Continue

//A. BREAK
let arr2 = [1,2,3,4,5];
// for (j=0;j<arr.length;j++)
// {
//     if (j == 2)
//     {
//         break;  // the entire loop will end 
//     }
//     console.log(arr2[j]);
// }

//B. CONTINUE
// for (j=0;j<arr.length;j++)
// {
//     if (j == 2)
//     {
//         continue;  // the iteration with j = 2 will be skipped and the other iteration will follow
//     }
//     console.log(arr2[j]);
// }

let myArr = ["Fan","Camera",34,null,true];

//10. Dates in  JS
let myDate = new Date();
// console.log(myDate); // get the current date with time
// console.log(myDate.getTime()); //gets the current time in seconds
// console.log(myDate.getFullYear()); // gets the current year
// console.log(myDate.getHours()); //gets today's total hours passed
// console.log(myDate.getMinutes()); //gets the minutes passed after today's total hours passed
// console.log(myDate.getMonth()); //gets the current month of the year

/****************************************************************************************************************
 *                                       IMPORTANT
 ****************************************************************************************************************
 */

//11. DOM MANIPULATION - DOCUMENT OBJECT MODEL MANIPULATION
  let elem = document.getElementById('click').click();
//   console.log(elem);

  let elemClass = document.getElementsByClassName("container");
//   console.log(elemClass);
//   elemClass[0].style.background = "yellow";
//   elemClass[0].classList.add('bg-primary');
//   elemClass[0].classList.add("text-success");
//   elemClass[1].classList.add("another-success");

//   console.log(elemClass[0].innerHTML);
//   console.log(elemClass[0].innerTEXT);
tn = document.getElementsByTagName('div');
// console.log(tn) 

//selecting by query
// sel = document.querySelector('.container');
// console.log(sel);

// sel2 = document.querySelectorAll('.container');
// console.log(sel2);

function clicked()
{       
    console.log("The button was clicked");
}
// window.onload = function()
// {
//     console.log("The document was loaded");
// }

//12. Events in JS

// firstcontainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log('Clicked on the Container')
// })

// firstcontainer.addEventListener('mouseover',function(){
//     console.log('Cursor was on the container');
// })
// firstcontainer.addEventListener('mouseout',function(){
//     console.log('Cursor was out of the container');
// })

// NORMAL FUNCTION:
// function summ(a,b)
// {
//     return a + b;
// }

// ARROW FUNCTION
// summ = (a,b)=>{
//     return a + b;
// }
// console.log(summ(2,3));

// 13. SetTimeout and SetInterval
// timeUp = ()=>
// {
//     console.log("Your time is up!!");
// }
// clr2 = setTimeout(timeUp,5000);   //this will print the above text after 5000 milliseconds that is 5 seconds


// timeIntervalReached = ()=>
// {
//     console.log('Your 5 seconds have been completed');
// }
// clr = setInterval(timeIntervalReached,5000); //this will print the above text after every 5 seconds of time interval

// The setInterval can only be stopped by writing clearInterval(clr) in the console and the setTimeout can only be
// stopped by writing clearTimeout(clr2) on the console.

//use clearInterval(clr)/clearTimeout(clr2) to cancel setInterval/setTimeout

// 15. JavaScript localStorage
//Every webpage has it's own storage of key value pairs which can be modified by :
// localStorage.setItem('key','value');
// localStorage.getItem('key');  //You can get the value by this
//localStorage.clear() clears the data in the localStorage

// Overall, you can check the localStorage of any webpage by simply writing
// localStorage;

// 16. JSON - JavaScript Object Notation
// obj = {name : "pvp", length: 1};
// jso = JSON.stringify(obj);     //this converts the above object to string and stores it in jso
// console.log(jso);
// the typeof obj after this is still object but for jso, it is a string.

//JSON SUPPORTS ONLY DOUBLE QUOTES AND NOT SINGLE QUOTES


// obj2 = {name : "pvp", length: 1, a: {this: 'tha"t'}} //the double quotes in obj a here will be turned to \ character
// jso2 = JSON.stringify(obj2);
// console.log(jso2); 


//JSON parse
// parsed = JSON.parse('{"name":"pvp","length":1}');
// console.log(parsed);

// 17. JavaScript Versions
// ECMA script is a standard that is used to maintain JavaScript

//For example, a version of JavaScript had the following syntax:
// Template literals - Backticks
// a = 34;
// console.log(`this is my ${a}`);

  
