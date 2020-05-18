import {createElementWithClassesText, createImageWithClasses} from './helper.js'
import {Card} from './card.js'

export class Preview {
    constructor (param)
    {
        this.type = param.type;
    }

    renderPreview(person) 
    {
        let item = createElementWithClassesText('div', [person.type]);

        if (this.type == 'personPreview')
        {        
            let ava = createImageWithClasses(['ava'], person.photoUrl, person.fullName);

            let name = createElementWithClassesText('div', ['name'], person.fullName);

            let info = createElementWithClassesText('div', ['additionalInfo'], person.infoForPreview);

            item.appendChild(ava);
            item.appendChild(name);
            item.appendChild(info);
        }

        return item;
    }

    appendPreviewToDOM(person) {
        const layout = this.renderPreview(person);

        let students = document.getElementsByClassName("people")[0];
        students.appendChild(layout);

        layout.addEventListener('click', (event) => {
            let card = new Card({type:'personInfo'});
            card.openCard(card.type, person);
        });
    }
}