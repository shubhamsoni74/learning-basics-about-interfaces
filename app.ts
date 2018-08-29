interface NamedPerson{
    firstname:string;
    age?:number;
    [propname:string]:any;
    greet(lastname:string):void;
}
function greet(person:NamedPerson){
    console.log("hello"+person.firstname);
}
function changename(person:NamedPerson){
  person.firstname ="anna";
}
const person:NamedPerson ={
    firstname:"max",
    hobbies:["cooking","riding"],
    greet(lastname:string){
        console.log("hi,i am"+this.firstname+""+lastname);
    }
  
};
//greet({firstname:"shubham",age:21});
changename(person);
greet(person);
person.greet("anything");

class Person implements NamedPerson{
    firstname:string;
    lastname:string;
    greet(lastname:string){
        console.log("hi,i am"+this.firstname+""+lastname);

    };
    
}

const myperson=new Person();
myperson.firstname="Max";
myperson.lastname="anything";
greet(myperson);
myperson.greet(myperson.lastname);


// function types

interface DoubleValueFunc{
    (number1:number,number2:number):number;
}
let myDoubleFunction=function(value1:number,value2:number){
    return(value1+value2)*2;
};
console.log(myDoubleFunction(10,20));

//Interface inheritance

interface AgedPerson extends NamedPerson{
    age:number;
}
const oldPerson:AgedPerson={
    age:21,
    firstname:"max",
    greet(lastname:string){
        console.log("hello!");
    }
};
console.log(oldPerson);