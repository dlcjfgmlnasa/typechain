interface Human {
    name: string,
    age: number,
    gender: string
}
const person = {
    name: "nicolas",
    gender: "male",
    age: 22
};

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.gender}, you are a ${person.age}`;
    
}

console.log(sayHi(person));

export {};