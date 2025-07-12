let userName: string = "Amin Amgad";
let age: number;
age = 1455
let isTrue: boolean = true;

let names: string[] = ["Mona", "Amin", "Saad"]

let scores: number[] = [15, 20 , 30, 76]

let ages: Array<number> = [10,20,56]

// tuple

let user: [string, number, boolean] = ["Amin",18, true]

enum Direction {
    North, //0
    South,//1
    East,//2
    West//3
}

let dir: Direction = Direction.West;
console.log(dir);
console.log(Direction[dir]);

enum Role {
    Admin = "ADMIN",
    User =" USER",
    Guest = "GUEST"
}

console.log(Role.Admin);

// any

let data: any = 5
data="amin"
data = false
console.log(false);

// unKnown
let input: unknown = "Hello"

if(typeof input === "string"){
    console.log(input.toLowerCase());
}

function logMessage(message: string): void {
    console.log(message);
}

logMessage("Hello TO Node JS Course")

// function throwError(msg: string): never{
//     throw new Error(msg)
// }
// throwError("This is my err")

function getUserInfo (name: string, age:number): [string, number] {
    return [name , age]
}

enum Status {
    Active,
    Inactive
}

let statu: Status = Status.Active
console.log(getUserInfo("Ahmed", 28));
