// Interfaces , Type Aliase

interface User {
    name: string,
    age: number,
    isAdmin: boolean
}

const user1: User ={
    name:"Ahmed",
    age:15,
    isAdmin :true
}

console.log(user1);


type Product = {
    title: string,
    price: number
}

const product1: Product = {
    title:"Mobile",
    price: 4000
}

console.log(product1.title);
//////////////////////////


interface Person {
    name: string;
}

interface Employee extends Person{
    salary: number;
}

const emp:Employee = {
    name:"Amin",
    salary:8000
}

console.log(emp);
console.log(emp.salary);


type A = {x: number}
type B = {y: number}

type AB = A & B

const point:AB = {
    x :5,
    y: 6
}

console.log(point);

/***
 * 
 * create an interface is called Driver included {name: string, car: string, rating?: number}
 * create a type is called Ride included {pickup: string, dropoff: string, driver: Driver}
 */
