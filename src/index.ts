class Human{
    public name: string;
    public age: number;
    public gender: string;

    constructor(name:string, age:number, gender:string){
        this.name = name;
        this.age = age
        this.gender = gender
    }
}


const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.gender}, you are a ${person.age}`;
    
}

const lynn = new Human('Lynn', 10, 'female')

console.log(sayHi(lynn));

export {};