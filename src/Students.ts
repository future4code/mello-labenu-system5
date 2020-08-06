import moment from 'moment'
import * as fs from 'fs'
import { format } from 'path'

export interface User {
    name: string,
    id: number,
    email: string,
    birthday: string
}
export class Student implements User {

    constructor(
        public id: number,
        public name: string,
        public email: string,
        public birthday: string,
        private hobbies: string[]
    ) { }
}
export class StudentManager {
    // recebe o json e transforma em objeto com strings
    students: any = JSON.parse(fs.readFileSync('./students.json').toString())

    public getStudents(): any {
        console.log(this.students)
    }
    public addStudent(newStudent: Student): void {
        this.students.push(newStudent)
        // envia o novo array de objetos no formato aceio pelo json
        fs.writeFileSync('./students.json', JSON.stringify((this.students)))
    }
    public findStudent(id: number): any {
        const specificStudent = this.students.find((student: Student) => {
            return student.id === id
        })
        if (specificStudent) {
            const momentBirthday = moment(specificStudent.birthday, "DD/MM/YYYY")
            const age = moment().diff(momentBirthday, "years")
            console.log("Idade dx alunx " + specificStudent.name + ": " + Number(age))
        }

    }
}

const Luiz: Student = new Student(1, "Luiz Melodia", "luiz@melodia.com", "07/01/1951", ["Butequim", "Viola", "Praia do Leme", "Literatura"])
const Elis: Student = new Student(2, "Elis Regina", "elis@regina.com", "17/05/1955", ["Ouvir música", "Cuidar do campo", "Ouvir discos"])
const Jonh: Student = new Student(3, "John Coltrane", "jonh@coltrane.com", "23/09/1926", ["Transcendence", "Run", "Visual Arts"])
const studantManager: StudentManager = new StudentManager
studantManager.addStudent(Luiz)
// studantManager.addStudent(Elis)
studantManager.addStudent(Jonh)
// studantManager.getStudents()
studantManager.findStudent(3)