import {Person} from './person.js';

export class Student extends Person {
    constructor(param) {
        super(param);
        this.university = param.university;
        this.course = param.course;
    }   

    get infoForPreview()  {
        return this.university + ' ' + this.course + ' курс';
    }
}