// var aastrin1="String to check";
// astralogy="what is it";
// var bool=true;

// console.log(typeof(astrin1)+" "+typeof(astralogy));
// var kin="shan";
// let age=55;
// mad();
// {
//     let city='Maharashtra';
//     let State='Nagpur';
//     var mon=45
//     console.log(city+" "+State+" "+age);
// }
// console.log(mon+kin);
//  function mad(){
//    console.log(90);
// }
// let karu=89;
// //console.log(city+" "+State+" "+age);
// const Cities=['Mumbai','Nagpur','Bengaluru',67];
// console.log(Cities);
// const fruitMap=new Map([['Apple',45],['Banana',5]]);
// console.log(fruitMap);


// const pi=3.142;
// areofT();
// function areofT(){
//     let y=23;
//     let z=y*pi;
//     console.log(`Radius of circle  with radius ${y}:-`+z);
// }
// {
//     let ab=98;
//     let cd=87;
//     const d=98.65;
//     let d1=ab+cd+d;
//     console.log("Block scope value "+d1)
// }

// const Person={
//     FirstName:'Kritik',
//     LastName:'Wankhede',
//     ageP:23
// };
// console.log(`${Person.FirstName} surname is ${Person.LastName} and age is ${Person.ageP}.`);

// const num=[10,23,4,5,78,90];
// const sum=num.map((arr)=>arr+10);
// console.log(num);
// console.log(sum);

// const sub=num.filter((arr)=>arr%2==0);
// console.log(sub);
// const su=num.reduce((arr,total)=>{
//     return arr+total
//     },0)
// console.log(su);

// let arr=[10,20,30,45];
// console.log(arr);
// arr.shift();
// console.log(`After shifting ${arr}`);
// arr.push(56);
// console.log(`After pushing ${arr}`);
// arr.unshift(78);
// console.log(`After unshifting ${arr}`);
// arr.pop();
// console.log(`After poping ${arr}`);

// const maximum=arr.reduce((max,arr)=>{
//     if(arr>max) max=arr;
//     return max;
// });
// console.log(maximum);

// [a,b,c]=[1,2,3,4,5];

// console.log(a+b+c);

// let reg=/^[a-zA-Z ]/;
// let regi=/i/g;
// let res=reg.test('Hello Kritik');
// console.log(res);
// res=reg.test(34);
// console.log(res);

// console.log(regi.exec('Hello Kritik'));

// console.log("Hello Kritik".match(regi));
// var mat="Hello Kritik".match(regi);


// let date1=new Date("October 13, 2014 11:13:00");
// console.log(date1);
// console.log(date1.getDay());
// console.log(date1.getDate());
// console.log(date1.getHours());
// console.log(date1.getMonth());
// console.log(date1.getFullYear());


// let date2=new Date(1234567890876543);
// console.log(date2);

// let date3=new Date(2018,15,25,12,25,12,0);
// console.log(date3);

// let name='John';
// console.log(`Hello ${name}`);

// console.log(`"The result of expression:-${1+3}"`);

// let userName='Ashwin';
// function showMessage(){
//     userName='Uday';
//     console.log("Hello"+userName);

// }
// showMessage();
// console.log("Hello"+userName);

// function myFunc(a,b){
//     return 12*13;
// }
// console.log(myFunc());

// let result=function(a,b){
//     return a+b;
// }

// console.log(result(23,45));
function getExp(name,num){
    alert(`${name} has ${num} years experience`);
}
function getSolution(a,b,c){
    alert(`Sum:-${a+b+c}`);
    alert('Mul:-'+a*b*c);
}

let num=(n,total)=>{
    total.forEach((item)=>{
        n=n+item;
    });
    return n;
};

console.log(num(20,[32,4,67,89]));

let message=(num(20,[32,4,67,89])>0) ? ()=>console.log("Good"):()=>console.log("Hmm Check Again!");
message();

let result=(a,b)=>{
    let ck=42;
    return a+b+ck;
}

console.log(result(13,89));

const x=(y,z)=>y*z;
console.log(x(20,19));

let movies={
    Name:'Pushpa',
    Actor:'Allu Arjun',
    Price:430,
    budget:(Price)=>{
        console.log('Budget '+Price*100);
    }
};

let alluArjunMovies={
    Julayi:{
        Budget:40,
        Release:30-9-2015

    },
    DJ:{
        Budget:70,
        Release:24-4-2019
    },
    Pushpa:{
        Budget:100,
        Release:5-5-2021
    }
}
movies.budget(movies.Price);
console.log(typeof(movies));
console.log(alluArjunMovies.Julayi.Budget);

let user={name:'Kennedy',age:30}
console.log("age" in user);
console.log('Kennedy' in user);

for(let key in user){
    console.log(key+":"+user[key]);
    // console.log(user[key]);
}
