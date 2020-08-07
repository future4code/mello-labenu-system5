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
exports.Manager = void 0;
const Teachers_1 = require("./Teachers");
const Students_1 = require("./Students");
const moment_1 = __importDefault(require("moment"));
const fs = __importStar(require("fs"));
class Mission {
    constructor(id, startDate, endDate, teachers = [], students = [], currentModule) {
        this.id = id;
        this.startDate = startDate;
        this.endDate = endDate;
        this.teachers = teachers;
        this.students = students;
        this.currentModule = currentModule;
        this.name = "";
    }
    getId() {
        return this.id;
    }
    getName(name) {
        return this.name;
    }
    getStartDate() {
        return this.startDate;
    }
    getEndDate() {
        return this.endDate;
    }
    getCurrentModule() {
        return this.currentModule;
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    addStudent(student) {
        this.students.push(student);
    }
    setName(name) {
        this.name = name;
    }
}
class FullTimeMission extends Mission {
    constructor() {
        super(...arguments);
        this.allTeachers = [];
        this.allStudents = [];
    }
    setName(name) {
        this.name = name;
    }
    addTeacher(teacher) {
        this.allTeachers.push(teacher);
    }
    addStudent(student) {
        this.allStudents.push(student);
    }
}
class NightMission extends Mission {
    constructor() {
        super(...arguments);
        this.allTeachers = [];
        this.allStudents = [];
    }
    setName(name) {
        if (name.indexOf("-na-night") !== -1) {
            super.setName(name);
        }
    }
    addTeacher(teacher) {
        this.allTeachers.push(teacher);
    }
    addStudent(student) {
        this.allStudents.push(student);
    }
}
class Manager {
    constructor() {
        this.missions = JSON.parse(fs.readFileSync("./missions.json").toString());
    }
    getMissions() {
        console.log(this.missions);
    }
    addMission(mission) {
        this.missions.push(mission);
        fs.writeFileSync("./missions.json", JSON.stringify(this.missions));
    }
}
exports.Manager = Manager;
const Elis = new Students_1.Student(2, "Elis Regina", "elis@regina.com", "17/05/1955", ["Ouvir música", "Cuidar do campo", "Ouvir discos"]);
const Ana = new Students_1.Student(4, "Ana", "ana@email.com", "04/10/1982", ["ler", "gatinhos", "dormir"]);
const lais = new Teachers_1.Teachers(2, "lais", "lais@gmail.com", "27/01/1995", [
    Teachers_1.TEACHER_SPECIALTY.CSS,
    Teachers_1.TEACHER_SPECIALTY.TYPESCRIPT,
]);
const newMission = new FullTimeMission("1", moment_1.default("10/04/2020", "DD/MM/YYYY"), moment_1.default("10/11/2020", "DD/MM/YYYY"), [lais], [Elis], 3);
newMission.addStudent(Ana);
console.log(newMission.allStudents);
const newManager = new Manager();
newManager.addMission(newMission);
