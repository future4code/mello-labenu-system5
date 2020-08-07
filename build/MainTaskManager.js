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
const fs = __importStar(require("fs"));
const moment_1 = __importDefault(require("moment"));
const Students_1 = require("./Students");
const Mission_1 = require("./Mission");
const studantManager = new Students_1.StudentManager;
const teacherManager = new Students_1.StudentManager;
const missioonManager = new Mission_1.MissionManager();
if (process.argv[2] === "students") {
    const allStudents = studantManager.getStudents();
    allStudents.forEach((student) => {
        const momentBirthday = moment_1.default(student.birthday, "DD/MM/YYYY");
        const age = moment_1.default().diff(momentBirthday, "years");
        console.log(`Nome dx estudante: ${student.name} \n 
        E-mail: ${student.email} \n 
        Idade : ${age}`);
    });
}
if (process.argv[2] === "teachers") {
    const allTeachers = JSON.parse(fs.readFileSync("./teachers.json").toString());
    allTeachers.forEach((teacher) => {
        const momentBirthday = moment_1.default(teacher.birthday, "DD/MM/YYYY");
        const age = moment_1.default().diff(momentBirthday, "years");
        console.log(`Nome dx professorx: ${teacher.name} \n 
        E-mail: ${teacher.email} \n 
        Idade : ${age}`);
    });
}
