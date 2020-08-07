import moment from "moment";
import { User } from "./Students";
import * as fs from "fs";

export enum TEACHER_SPECIALTY {
  REACT = "REACT",
  REDUX = "REDUX",
  CSS = "CSS",
  TESTES = "TESTES",
  TYPESCRIPT = "TYPESCRIPT",
  OOP = "OOP",
  BACKEND = "BACKEND",
}

export class Teachers implements User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public birthday: string,
    public specialties: TEACHER_SPECIALTY[]
  ) {}

  getId = () => this.id;
  getName = () => this.name;
  getEmail = () => this.email;
  getBirthday = () => this.birthday;
  getSpecialties = () => this.specialties;

  //podem ser as especialidades: "React", "Redux", "CSS", "Testes", "Typescript", "Programação Orientada a Objetos", "Backend"
  addSpecialties(specialty: TEACHER_SPECIALTY): void {
    this.specialties.push(specialty);
  }
}

const paulinha: Teachers = new Teachers(
  1,
  "paulinha",
  "paulinha@gmail.com",
  "11/10/1991",
  [TEACHER_SPECIALTY.CSS, TEACHER_SPECIALTY.REACT]
);
console.log(paulinha);

const lais: Teachers = new Teachers(2, "lais", "lais@gmail.com", "27/01/1995", [
  TEACHER_SPECIALTY.CSS,
  TEACHER_SPECIALTY.TYPESCRIPT,
]);

console.log(lais);

export class TeacherManager {
  allTeachers: any = JSON.parse(fs.readFileSync("./teachers.json").toString());

  public getTeachers(): any {
    console.log(this.allTeachers);
  }
  public addTeacher(newTeacher: Teachers): void {
    this.allTeachers.push(newTeacher);
    // envia o novo array de objetos no formato aceio pelo json
    fs.writeFileSync("./teachers.json", JSON.stringify(this.allTeachers));
  }

  getAllTeachers(): Teachers[] {
    return this.allTeachers;
  }
}

const teacherManager: TeacherManager = new TeacherManager();
teacherManager.addTeacher(paulinha);
teacherManager.addTeacher(lais);
console.log(teacherManager.getAllTeachers());
