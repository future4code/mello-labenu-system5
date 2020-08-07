import * as fs from 'fs';
import moment from 'moment'
import { Student, StudentManager } from './Students'
import { Teachers, TeacherManager } from './Teachers'
import { Mission, MissionManager } from './Mission'

const studantManager: StudentManager = new StudentManager
const teacherManager: StudentManager = new StudentManager

const missioonManager: MissionManager = new MissionManager();

if (process.argv[2] === "students") {
    const allStudents: Student[] = studantManager.getStudents()
    allStudents.forEach((student) => {
        const momentBirthday = moment(student.birthday, "DD/MM/YYYY")
        const age = moment().diff(momentBirthday, "years")
        console.log(`Nome dx estudante: ${student.name} \n 
        E-mail: ${student.email} \n 
        Idade : ${age}`)
    })
}
if (process.argv[2] === "teachers") {
    const allTeachers: any = JSON.parse(fs.readFileSync("./teachers.json").toString());
    allTeachers.forEach((teacher: any) => {
        const momentBirthday = moment(teacher.birthday, "DD/MM/YYYY")
        const age = moment().diff(momentBirthday, "years")
        console.log(`Nome dx professorx: ${teacher.name} \n 
        E-mail: ${teacher.email} \n 
        Idade : ${age}`)
    })
}