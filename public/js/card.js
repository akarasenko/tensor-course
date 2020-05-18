import {createElementWithClassesText, createImageWithClasses} from './helper.js';

export class Card {
    constructor(param)
    {
        this.type = param.type;
    }

    renderCard(person) {
        let card = createElementWithClassesText('div', ['card']);

        if (this.type == "personInfo")
        {
            let closeButton = createElementWithClassesText('div', ['close']);
            closeButton.addEventListener('click', (event) => this.closeCard(event.currentTarget));

            let content = createElementWithClassesText('div', ['cardContent']);

            let info = person.infoForCard();
            
            let ava = createImageWithClasses(['cardAva', 'ava'], person.photoUrl, person.fullName);

            content.appendChild(info);
            content.appendChild(ava);

            card.appendChild(closeButton);
            card.appendChild(content);
        }    
        return card;
    }

    openCard(type, person) 
    {
        let currentCards = document.getElementsByClassName('close');
        if (currentCards.length != 0)
        {
            for (let card of currentCards) 
                {
                    this.closeCard(card);
                }
        }

        let card = this.renderCard(person);
        document.body.appendChild(card);
    }

    closeCard(element) {
        let card = element.parentNode;
        card.parentNode.removeChild(card);
    }

}