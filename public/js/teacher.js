import {Person} from './person.js';
import {createElementWithClassesText, createImageWithClasses} from './helper.js';

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

    infoForCard() {
        let info = createElementWithClassesText('div', ['personInfo']);

        let name = createElementWithClassesText('div', ['name'], this.fullName);
        let position = createElementWithClassesText('div', ['additionalInfo'], this.position);
        let subject = createElementWithClassesText('div', ['additionalInfo'], this.infoForPreview);

        info.appendChild(name);
        info.appendChild(position);
        info.appendChild(subject);

        return info;
    }
}