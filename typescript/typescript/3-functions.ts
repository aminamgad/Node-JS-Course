// Functions

function sayHello(name: string): string {
    return `Hello ${name}`
}

console.log(sayHello("Amin"));

function add(x :number , y:number): number {
    return x + y
}

console.log(add(23,25));

function log(message: string): void{
    console.log(message);
}

log("Welcome to Node js course")

function greet(name?: string): string{
    return name ? `Hello ${name}` : "Welcome"
}

console.log(greet());
console.log(greet("Yasser"));

function multiply(x: number, y: number = 2): number{
    return x * y
}

console.log(multiply(3));
console.log(multiply(4,5));


function total(numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr , 0)
}

console.log(total([1, 2, 3 ,4]));// 10

const welcome = (name: string): string => {
    return `Hello ${name}`
}

console.log(welcome("Ahmed"));

/**
 * Create a function is called 'isEven' take a number as a parameter and return true if the number is even.
 * 
 * 
 * Create a function is called 'getFullName' take first name and last name and return a full name.
 */