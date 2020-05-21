import {Person} from './person.js';

export class Teacher extends Person{
    constructor(param)
    {
        super(param);
        this.position = param.position;
        this.subject = param.subject;
    }

    get infoForPreview()  {
        return 'Куратор курса: ' + this.subject;
    }
}