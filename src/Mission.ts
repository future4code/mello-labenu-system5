import { Teachers, TEACHER_SPECIALTY } from "./Teachers";
import { Student } from "./Students";
import moment from 'moment';
import * as fs from "fs";


export abstract class Mission {
    protected name: string = "";

    constructor(
      private id: string,
      private startDate: moment.Moment,
      private endDate: moment.Moment,
      private teachers: Teachers[] = [],
      public students: Student[] = [],
      private currentModule: number|undefined
    ) {}
  
    public getId(): string {
      return this.id;
    }
  
    public getName(name: string): string {
      return this.name;
    }
  
    public getStartDate(): moment.Moment {
      return this.startDate;
    }
  
    public getEndDate(): moment.Moment {
      return this.endDate;
    }
    public getStudents(): Student[] {
      return this.students;
    }
  
    public getCurrentModule(): number | undefined {
      return this.currentModule;
    }
  
    public addTeacher(teacher: Teachers) {
      this.teachers.push(teacher);
    }
  
    public addStudent(student: Student) {
      this.students.push(student);
    }
  
    public setName(name: string) {
      this.name = name;
    }
  }

  class FullTimeMission extends Mission {
      public setName(name:string){
          this.name=name
      }

      allTeachers: Teachers [] = []
      allStudents: Student[] =[]

      addTeacher(teacher:Teachers) : void {
          this.allTeachers.push(teacher)
      }

      addStudent(student:Student) : void {
        this.allStudents.push(student)
    }

  }


  class NightMission extends Mission {
    public setName(name: string) {
      if (name.indexOf("-na-night") !== -1) {
        super.setName(name);
      }
    }

    allTeachers:Teachers[] = []
    allStudents:Student[] = []

    addTeacher(teacher:Teachers) : void {
        this.allTeachers.push(teacher)
    }

    addStudent(student:Student): void {
        this.allStudents.push(student)
    }
  }

  export class MissionManager {
      missions:any = JSON.parse(fs.readFileSync("./missions.json").toString())

      getMissions():any{
          return this.missions
      }

      addMission(mission:Mission):void{
          this.missions.push(mission)
          fs.writeFileSync("./missions.json",JSON.stringify(this.missions))
      }

  }

  const Elis: Student = new Student(2, "Elis Regina", "elis@regina.com", "17/05/1955", ["Ouvir música", "Cuidar do campo", "Ouvir discos"])

  const Ana: Student = new Student(4,"Ana","ana@email.com","04/10/1982",["ler","gatinhos", "dormir"])

  const lais: Teachers = new Teachers(2, "lais", "lais@gmail.com", "27/01/1995", [
    TEACHER_SPECIALTY.CSS,
    TEACHER_SPECIALTY.TYPESCRIPT,
  ]);

  const newMission: FullTimeMission = new FullTimeMission("1", moment("10/04/2020","DD/MM/YYYY"), moment("10/11/2020","DD/MM/YYYY"),[lais],[Elis],3);

  newMission.addStudent(Ana);

  console.log(newMission.allStudents);

  const newManager: MissionManager = new MissionManager();

  newManager.addMission(newMission);

