//console.log('yo!')

//1. Примитивы:
// числа, строки, булевы значения, null, undefined, NaN
//2. Обьекты:
// обьекты, массивы, функции

// - обьекты имеют свойства и методы
// - ссылочный тип данных
// - сложная структура

/*const  student = {
    name: 'Alex',
    age: 23,
    salary: 0,
    friends: ['Bob', 'John', 'Mike']

}

const student2 = {
    name: 'Alex',
    age: 23,
    friends: ['Bob', 'John', 'Mike']
}

/*const student2 = student //#35
student.salary = student.salary + 100
student2.name = 'Smith'
console.log(student2)
console.log(student)
console.log(student2===student) // true

const studentFullCopy = {...student, friends: [...student.friends]}

function myFunction (a) {
    const b = () => console.log(a)
    return [a, b]
}

const result = myFunction (a:22)
console.log(result)

let[state, fn] = myFunction(a:22)

console.log(state, fn)
fn()*/

const students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 89
    },
    {
        name: 'Alex',
        age: 22,
        isMarried: true,
        scores: 89
    },
    {
        name: 'Mike',
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        name: 'John',
        ade: 19,
        isMarried: false,
        scores: 100
    }
];

const newArr = students.map(s => ({...s}))
console.log(newArr)

const trueStudents = students.map(s => ({...s, isSudent: true}))

console.log(trueStudents)

const allStudents = trueStudents.map(s => ({...s, scores: s.scores + 10}))

const allstudents = trueStudents.map(item => {
    if (item.name === 'Bob') {
        return {
            ...item, scores: item.scores + 10
        }
    else
        {
            return {...item}
        }
    }
})