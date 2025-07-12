// Classes

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    sayHello(): void{
        console.log(`Welcome my name is ${this.name} ans my age is ${this.age}`);
    }
}

const person1 = new Person("Karim", 30)
person1.sayHello()

class BankAccount {
    private balance: number;

    constructor(initial: number){
        this.balance = initial
    }

    deposit(amount: number){
        this.balance += amount;
    }

    withdraw(amount: number){
        this.balance -= amount;        
    }

    getBalance(): number{
        return this.balance
    }
}

const acc = new BankAccount(1000)
acc.deposit(500)

console.log(acc.getBalance());
acc.withdraw(200)
console.log(acc.getBalance());

// inheritance

class Animal {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    makeSound(): void{
        console.log("Sounnnnnd");
    }
}

class Dog extends Animal{
    breed: string

    constructor(name: string, breed: string){
        super(name)
        this.breed = breed;
    }

    makeSound(): void {
        console.log("Hoooooo");
        
    }
}



const dog1 = new Dog("Popy", "Balady")
dog1.makeSound()