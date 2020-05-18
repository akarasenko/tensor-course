import {Person} from './person.js';
import {createElementWithClassesText, createImageWithClasses} from './helper.js'

export class Student extends Person {
    constructor(param) {
        super(param);
        this.university = param.university;
        this.course = param.course;
    }   

    get infoForPreview()  {
        return this.university + ' ' + this.course + ' курс';
    }

    infoForCard() {
        let info = createElementWithClassesText('div', ['personInfo']);

        let name = createElementWithClassesText('div', ['name'], this.fullName);
        let education = createElementWithClassesText('div', ['additionalInfo'], this.infoForPreview);
        let birthDate = createElementWithClassesText('div', ['additionalInfo'], this.birthDateStr);
        let age = createElementWithClassesText('div', ['additionalInfo'], this.age);

        info.appendChild(name);
        info.appendChild(education);
        info.appendChild(birthDate);
        info.appendChild(age);

        return info;
    }
}