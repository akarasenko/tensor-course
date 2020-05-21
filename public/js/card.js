import {Component} from './component.js'

export class Card extends Component{
    constructor(param)
    {
        super(param);
    }

    render() {

        return `<div class = 'card'>
            <div class = 'close'></div>
            <div class = 'cardContent'>
                <div class = 'personInfo'>
                    <div class = "name" title="${this.data.fullName}">${this.data.fullName}</div>
                    <div class = "additionalInfo" title="${this.data.infoForPreview}">${this.data.infoForPreview}</div>
                </div>
                <img class = "avaCard ava" src = "${this.data.photoUrl}" alt = "${this.data.name}">
            </div>
        </div>`;

    }

    beforeMount()
    {
        let currentCards = document.querySelectorAll('.card');
        if (currentCards.length != 0)
        {
            for (let card of currentCards) 
                {
                    card.remove();
                }
        }
    }

    afterMount()
    {
        let closeButtom = this.component.querySelector('.close');

        closeButtom.addEventListener('click', event => 
        {
            this.component.remove();
            this.component = undefined;
        })
    }
}