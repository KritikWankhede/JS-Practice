// function User(prefix,suffix){
//     this.name=prefix;
//     this.suffix=suffix;

// }

// let user=new User('Kritik','Wankhede');
// console.log(user.name+' '+user.suffix);

// let user1=new User();
// let user2=new User();

// console.log(user1.name);

// User.prototype.age=24;
// User.prototype.gender='Male';

// user1.age=75;
// console.log(user1.age+" "+user.gender);

// console.log(user1.age==user.age);

// console.log(user1);
// console.log(user);
// function Person(firstName,LastName,age,eye){
//     this.firstName=firstName;
//     this.LastName=LastName;
//     this.age=age;
//     this.eye=eye;
// }

// let father=new Person('Jab',"Kranski",50,'Black');
// let mother=new Person('Molly',"Kranski",48,'Brown');
// console.log(father);
// console.log(mother);

// function PersonNew(name){
//     this.name=name;
// }

// PersonNew.prototype.getName=function(){
//     return this.name;
// }

// let john=new PersonNew('John Doe');
// console.log(john.getName());

// let phil=new PersonNew('Phil Salt');
// console.log(phil.getName());

// console.log(john instanceof PersonNew);
// console.log(john instanceof Object);

// console.log(phil instanceof Person);


// class Check{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }

//     sayHi=()=>{
//         console.log(`Hello ${this.name} you are ${this.age} years old.`);
//     }
// }

// let navel=new Check('Navin',34);
// navel.sayHi();

// // class Rectangle{
// //     constructor(height,width){
// //         this.height=height;
// //         this.widht=width;
// //     }
// // }

// let Rectangle=class{
//     constructor(height,width){
//         this.height=height;
//         this.width=width;
//     }
//     getArea=()=>{
//         return this.height*this.width;
//     }
// }
// let obj=new Rectangle(12,20);
// console.log('Area of rectange '+Rectangle.name+" "+obj.getArea());

// class Jitter{
//     constructor (name){
//         this.name=name;
//     }
//     get name(){
//         return this._name;
//     }
//     set name(value){
//         if(value.length<4){
//             console.log("Name is too short");
//             return;
//         }
//         else{
//             this._name=value;
//         }
//     }
// }

// let userName=new Jitter('Jon');
// console.log(userName.name);
// // userName.name('Cat');
// // console.log(userName.name);
// import {userName,age}from "./Person.js";
// import { add,greet} from "./Person.js";
// let sum=add(34,56);
// console.log(userName+": "+age);
// console.log(`${sum} ${greet()}`);

// import jag from './Person.js';
// console.log(`Calculations of two numbers=${jag(32,12)}`);

// const fhoa={
//     Name:'Kartikeya',
//     age1:32,
//     gender:'Male'
// }

// // let{Name,age1,gender}=fhoa;
// let{Name:Naam,age1:Umar,gender:ling,Disable='No'}=fhoa;
// console.log(Naam);
// console.log(Umar);
// console.log(ling);
// console.log(Disable);
// const [av,...rest]=[1,2,3];
// console.log(rest);
// // const[x,y,r]=arrValue;

// // console.log(x,y,r);

// let arrV=[10];
// let[a=10,b=23]=arrV;

// console.log(arrV);

// let num1=3,num4=6;
// [num1,num4]=[num4,num1];
// console.log(num1,num4);

// const stringArr=['One','Two','Three'];
// console.log(...stringArr);

// const arr1=[1,2];
// const arr2=[...arr1,3,4,5];
// console.log(...arr2);
// const obj1={num2:1,num3:2};
// const obj2={num5:3};

// const obj3={...obj1,...obj2};
// console.log(obj3);

// setTimeout(()=>{
//     console.log("Welcome Home");
// },5000);
// console.log("It is execeuted.");

// function gg(){
//     console.log("Welcome Home"+nza);
// }

// setTimeout(gg(),2000);
// console.log("It is execeuted gg.");

// function welcome(){
//     console.log('Hello Cognizant');
// }
// function sayName(Name){
//     console.log('Hello'+Name);
// }

// setTimeout(welcome,2000);
// sayName('MSK');
// var count=1;
// function showTime(){
//     let dateTime=new Date();
//     let time=dateTime.toLocaleString();
//     console.log(time);
//     if(count>10){
//         return;
//     }
//     count++;
//     let timerid=setTimeout(showTime,3000);
    

// }
// showTime();

// function greet(Name,call){
//     console.log('Hi '+Name);
//     call();
// }

// function callMe(){
//     console.log("Its a callBack function");
// }

// greet('MSK',callMe);

function welcome(Name,myFunc){
    console.log('Hello Prudent');
    myFunc(Name);
}

function sayName(Name){
    console.log('Hello '+Name);
}

setTimeout(welcome,3000,'MSK',sayName);

