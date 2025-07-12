// Generics

function echo<T>(value: T): T{
    return value
}

console.log(echo<string>("Hello"));
console.log(echo<number>(12));
console.log(echo<boolean>(true));


function printArray<T>(arr: T[]) : void{
    arr.forEach((item) => console.log(item)
    )
}

printArray<string>(["One", "Two", "Three"])
printArray<number>([1, 2, 3])

interface Box<T> {
    value: T;
}

const stringBox: Box<string> = {value: "Amin"}
const numberBox: Box<number> = {value: 123}

class Store<T> {
    private items: T[] = [];

    add(item: T){
        this.items.push(item)
    }

    getAll(): T[]{
        return this.items
    }
}

const stringStore = new Store<string>();

stringStore.add("Product")
stringStore.add("Product")
stringStore.add("Product")
console.log(stringStore.getAll());

const numberStore = new Store<number>();

numberStore.add(56)
numberStore.add(56)
numberStore.add(78)
console.log(numberStore.getAll());
