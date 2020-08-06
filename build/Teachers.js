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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherManager = exports.Teachers = void 0;
const fs = __importStar(require("fs"));
var TEACHER_SPECIALTY;
(function (TEACHER_SPECIALTY) {
    TEACHER_SPECIALTY["REACT"] = "REACT";
    TEACHER_SPECIALTY["REDUX"] = "REDUX";
    TEACHER_SPECIALTY["CSS"] = "CSS";
    TEACHER_SPECIALTY["TESTES"] = "TESTES";
    TEACHER_SPECIALTY["TYPESCRIPT"] = "TYPESCRIPT";
    TEACHER_SPECIALTY["OOP"] = "OOP";
    TEACHER_SPECIALTY["BACKEND"] = "BACKEND";
})(TEACHER_SPECIALTY || (TEACHER_SPECIALTY = {}));
class Teachers {
    constructor(id, name, email, birthday, specialties) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.birthday = birthday;
        this.specialties = specialties;
        this.getId = () => this.id;
        this.getName = () => this.name;
        this.getEmail = () => this.email;
        this.getBirthday = () => this.birthday;
        this.getSpecialties = () => this.specialties;
    }
    //podem ser as especialidades: "React", "Redux", "CSS", "Testes", "Typescript", "Programação Orientada a Objetos", "Backend"
    addSpecialties(specialty) {
        this.specialties.push(specialty);
    }
}
exports.Teachers = Teachers;
const paulinha = new Teachers(1, "paulinha", "paulinha@gmail.com", "11/10/1991", [TEACHER_SPECIALTY.CSS, TEACHER_SPECIALTY.REACT]);
console.log(paulinha);
const lais = new Teachers(2, "lais", "lais@gmail.com", "27/01/1995", [
    TEACHER_SPECIALTY.CSS,
    TEACHER_SPECIALTY.TYPESCRIPT,
]);
console.log(lais);
class TeacherManager {
    constructor() {
        this.allTeachers = JSON.parse(fs.readFileSync("./teachers.json").toString());
    }
    getTeachers() {
        console.log(this.allTeachers);
    }
    addTeacher(newTeacher) {
        this.allTeachers.push(newTeacher);
        // envia o novo array de objetos no formato aceio pelo json
        fs.writeFileSync("./teachers.json", JSON.stringify(this.allTeachers));
    }
    getAllTeachers() {
        return this.allTeachers;
    }
}
exports.TeacherManager = TeacherManager;
const teacherManager = new TeacherManager();
teacherManager.addTeacher(paulinha);
teacherManager.addTeacher(lais);
console.log(teacherManager.getAllTeachers());
