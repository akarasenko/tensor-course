import {Component} from './component.js'

export class Card extends Component{
    constructor(param)
    {
        super(param);
    }

    render() {

        let closeButtom =  React.createElement('div', { className: 'close'});
        
        let name = React.createElement('div', { className: 'name', title: this.data.fullName}, this.data.fullName);
        let info = React.createElement('div', { className: 'additionalInfo', title: this.data.infoForPreview }, this.data.infoForPreview);
        let personInfo = React.createElement('div', { className: 'personInfo' }, name, info);

        let cardAva = React.createElement('img', { className: 'cardAva ava', src: this.data.photoUrl, alt: this.data.name});
        let cardContent = React.createElement('div', { className: 'cardContent' },personInfo, cardAva);

        this.component = React.createElement('div', { className: 'card' }, closeButtom, cardContent);

   //     return `<div class = 'card'>
   //         <div class = 'close'></div>
   //        <div class = 'cardContent'>
   //             <div class = 'personInfo'>
   //                 <div class = "name" title="${this.data.fullName}">${this.data.fullName}</div>
   //                 <div class = "additionalInfo" title="${this.data.infoForPreview}">${this.data.infoForPreview}</div>
   //             </div>
   //             <img class = "cardAva ava" src = "${this.data.photoUrl}" alt = "${this.data.name}">
   //         </div>
   //     </div>`;
    }

    beforeMount()
    {
/*        let currentCards = document.querySelectorAll('.card');
        if (currentCards.length != 0)
        {
            for (let card of currentCards) 
                {
                    card.remove();
                }
        }
        */
    }

    fterMount()
    {
        // закрытие по кнопке close не работает сейчас
/*        let closeButtom = document.querySelector('.close');

        closeButtom.addEventListener('click', event => 
        {
            this.component.remove();
            this.component = undefined;
        })
*/            
    }
}