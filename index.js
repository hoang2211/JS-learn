/*1.basic
console.log(`Hello`); //(``) chuoi dung de nhung cac bien hoac bieu thuc truc tiep vao chung
console.log(`I like Pizza`); 
console log dung de hien thi trong muc console trong 1 website dung de testing 

window.alert(`This is an alert`);
window.alert(`I Like pizza`);
alert()[shorthand] dung de hien thi hop thong bao cho tin nhat dac biet
dung de giao tiep, thong bao voi user

document.getElementById("myH1").textContent=`Hello`;
document.getElementById("myP").textContent=`I Like Pizza`;
*/


/*2. Variable

let x; //khai bao bien 
x = 100; //cho bien x mot gia tri integer
console.log(x);

let age = 18;
let price = 10.99;
let gpa = 3.0;

console.log(typeof gpa);
//typeof de biet xac dinh kieu du lieu cua bien la j
console.log(`You are ${age} year old`);
console.log(`The price is $${price}`);
console.log(`You gpa is:${gpa}`);
//TH khai bien (``) thi doi voi js chung ta dung ${} de khai bao bien

String
let firstName ="Hoang";
let fvfood="miquang";
let email ="@email";
console.log(typeof firstName);
console.log(`Your name is ${firstName}`);
console.log(`Your like  ${fvfood}`);
console.log(`Your email is ${email}`);
//chuoi string co the chua con so nhung khong the thuc hien cac tinh toan

Boolean

let online = false;
let forSale= true;
let isStudent = true;
console.log(typeof online);

console.log(`H is online: ${online}`);
console.log(`Is this sth for sale:${forSale}`);
console.log(`Enrolled:${isStudent}`);

let fullName = "H";
let age = 22;
let student = true;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `Your age ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${student}`;

*/

/*3. Arithmetic operators 
thuc hien phep tinh toan 


let students = 31;

students = students +1;
students = students -1;
students = students *2;
students = students /2;
students = students ** 2; exponents la so mu~
let extraStudents = students %3;

augmented assignment operator
students +=1;
students -=1;
students *=2;
students /=2;
students **=2;
students %=2;

console.log(students);

operator precedence (Thứ tự ưu tiên của toán tử trong lập trình)
    1. trong ngoac don()
    2. exponents 
    3. * & / & %
    4. + & -
*/

/* 4. Cach de chap thuan  user input
    1. don gian = window prompt
    2. proffesional way = HTML textbox


 let username;

// username = window.prompt("What's your username?");

// console.log(username);
// documnet.getElemntById de nhan id trong TH nay la submit
// vi la button nen thuc hien action onclick de thuc hien fuction
// trong nay nhan gia tri myText trong value
// sau do chung ta nhan id la h1 dung textContent de khai bao
// text cua minh
    document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
    console.log(username);
}
    */

/* 5. Type conversion (thay doi gia tri nhap vao)
    thay doi kieu du lieu tu gia tri nay sang gia tri khac
    (strings, numbers, booleans)


let age = window.prompt("how old are you?");
//trong truong hop nay no nhan kieu du lieu string

age = Number(age);
//chung ta khai bao function la Number() se thay doi kieu du lieu
//sang numbers(co the thay doi nhu String(),Booleans())
age +=1;

console.log(age, typeof age);
//trong TH nay no khai bao kieu du lieu la number
//Neu chung ta xoa dong 124, se khai bao kieu du lieu la String

let x ="a";//"0" x nhan  0 | "" x nhan 0
let y ="a";//"0" y nhan 0 | "" y gia tri null
let z ="a";//"0" z nhan true |  "" z la false
//"" de gia tri empty
//Va neu chung ta chi khai bao x,y,z ma khong khau bao gia tri 
// x NaN, y undefined, z false
x=Number(x);
y=String(y);
z=Boolean(z);

console.log(x,typeof x);
//Neu chung ta khai bao x kieu du lieu Number nhan duoc 
// la NaN (not a number) nhung kieu du lieu van number
console.log(y,typeof y);
console.log(z,typeof z);
//Neu chung ta khai bao z kieu du lieu Boolean nhan duoc 
//luon luon la true
*/

/*6.const la bien ma gia tri khong the bi THAY DOI  

// let pi = 3.14159;

const PI = 3.14159;

//dung const doi voi nhung gia tri doc nhat 

let radius;
let circumference;

//trong truong hop nay neu chung ta set gtri pi ko la const
//thi gia tri co the bi thay doi nhu vi du duoi day 
// PI = 20;
//neu chung ta cho PI co thuoc tinh const, thi neu thay doi
//gtri se thong bao loi  

// radius = window.prompt('Enter the radius of a circle');
// radius = Number(radius);
// circumference = 2* PI * radius;
// console.log(circumference);

document.getElementById("mySubmit").onclick = function(){
    radius=document.getElementById("myText").value;
    radius=Number(radius);
    circumference = 2* PI * radius;
    document.getElementById("myH3").textContent=circumference +"cm";

}
    */
/* 7. Counter Program

const descBtn = document.getElementById("descBtn");
const resetBtn = document.getElementById("resetBtn");
const incrsBtn = document.getElementById("incrsBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

incrsBtn.onclick = function(){
    count++;
    countLabel.textContent=count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent=0;
}

descBtn.onclick = function(){
    // count--;
    // countLabel.textContent=count;
    if(count<1){
        window.alert(`Not available`);
    }else{
        count--;
        countLabel.textContent=count;

    }

} */
/*  8.Math obj
    math = built-in obj provides a collection of 
    properties and methods 
Math.PI;
Math.E;

console.log(Math.PI);
console.log(Math.E);

let x =3.99;
let y =2;
let z;
let m =1;
// z= Math.round(x);
///z=Math.floor(x); lam tron gia tri thap nhat
//z=Math.ceil(x); lam tron gia tri cao nhat
// z=Math.trunc(x);
// z=Math.pow(x,y);
// z=Math.sqrt(x);
// z=Math.log(x);
// z=Math.sin(x); cos|tan
// z=Math.abs(x);
// z=Math.sign(x);
// let max = Math.max(x ,y, m);
// let min = Math.min(x ,y, m);

// console.log(z);
// console.log(max);
// console.log(min);
*/

/* 9. Random number gen
// const min =50;
// const max =100;

// let randomNum = Math.floor(Math.random() * (max - min))+min;

// let randomNum = Math.floor(Math.random() *6)+1;
//random *6 se lay gia tri tu 0.000 -> 6.000 nhan gia tri thap phan
//de random 0 nhan decimal ta dung Math.floor 0->5
//vi the nen ta se them +1 nhan gtri 1->6

// console.log(randomNum);

const myBTN = document.getElementById("myBTN");
const label1 =document.getElementById("label1");
const label2 =document.getElementById("label2");
const label3 =document.getElementById("label3");

const min=1;
const max=6;
let randomNum1;
let randomNum2;
let randomNum3;


myBTN.onclick = function(){
    randomNum1 = Math.floor(Math.random() * (max - min))+min;
    randomNum2 = Math.floor(Math.random() * (max - min))+min;
    randomNum3 = Math.floor(Math.random() * (max - min))+min;

    label1.textContent =randomNum1;
    label2.textContent =randomNum2;
    label3.textContent =randomNum3;


}*/

/* 10.If statment */

// let age
// const btn = document.getElementById("submit").onclick =function(){
//     age=document.getElementById("AgeNum").value;
//     if(age >=18){
//         console.log("You are old enough to enter this site");
    
//     }else{
//         console.log("Ask your parent for permission")
//     }
// };

