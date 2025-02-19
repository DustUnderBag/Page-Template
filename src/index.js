import "./reset.css";

console.log("Script entry point working");

class People {
    constructor(name, gender, age, country) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.country = country;
    }

    eat() {
        
    }

    get intro() {
        return `${this.name} is from ${this.country}!`;
    }
}

const ppl = new People("John", "Male", 23, "Canada");
console.log(ppl.age);
console.log(ppl.intro);