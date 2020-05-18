import {Person, Student, Teacher} from './personLib.js';
import {Preview} from './preview.js';

export class Factory{
    static createPerson(param)
    {
        return new Person(param);
    }
    static createStudent(param)
    {
        return new Student(param);
    }
    static createTeacher(param)
    {
        return new Teacher(param);
    }

    static create (param)
    {
        let instanse;

        switch(param.type){
            case 'student': { instanse = this.createStudent(param); break;} 
            case 'teacher': { instanse = this.createTeacher(param); break;}
            default: { instanse = this.createPerson(param); break; }
        }

        const preview = new Preview({type: 'personPreview'});
        preview.appendPreviewToDOM(instanse);

        return instanse;
    }
}