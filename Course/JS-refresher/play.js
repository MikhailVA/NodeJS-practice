const person = {
    name: 'Max',
    age: 29,
    greet () {
        console.log('Hi, I am '+ this.name)
    }
}

const func = ({name}) => {
    console.log(name)
}

func(person)

let {name,age} = person;
age++
console.log(name, age)