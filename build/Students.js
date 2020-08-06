"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentManager = exports.Student = void 0;
const moment_1 = __importDefault(require("moment"));
const fs = __importStar(require("fs"));
class Student {
    constructor(id, name, email, birthday) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.birthday = birthday;
    }
}
exports.Student = Student;
class StudentManager {
    constructor() {
        // recebe o json e transforma em objeto com strings
        this.students = JSON.parse(fs.readFileSync('./students.json').toString());
    }
    getStudents() {
        console.log(this.students);
    }
    addStudent(newStudent) {
        this.students.push(newStudent);
        // envia o novo array de objetos no formato aceio pelo json
        fs.writeFileSync('./students.json', JSON.stringify((this.students)));
    }
    findStudent(id) {
        const specificStudent = this.students.find((student) => {
            return student.id === id;
        });
        if (specificStudent) {
            const momentBirthday = moment_1.default(specificStudent.birthday, "DD/MM/YYYY");
            const age = moment_1.default().diff(momentBirthday, "years");
            console.log("Idade dx alunx " + specificStudent.name + ": " + Number(age));
        }
    }
}
exports.StudentManager = StudentManager;
const Luiz = new Student(1, "Luiz Melodia", "luiz@melodia.com", "07/01/51");
const Elis = new Student(2, "Elis Regina", "elis@regina.com", "17/05/55");
const Jonh = new Student(3, "John Coltrane", "jonh@coltrane.com", "23/09/26");
const studantManager = new StudentManager;
// studantManager.addStudent(Luiz)
// studantManager.addStudent(Elis)
// studantManager.addStudent(Jonh)
// studantManager.getStudents()
studantManager.findStudent(2);
