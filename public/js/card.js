import {Component} from './component.js'

export class Card extends Component{
    constructor(param)
    {
        super(param);
        state: {
            data: param;
        }
    }

    render() {

        if (!this.state)
        {
            this.component = React.createElement('div');
        }
        else 
        {
        let closeButtom =  React.createElement('div', { className: 'close'});
        
        let name = React.createElement('div', { className: 'name', title: this.state.data.fullName}, this.state.data.fullName);
        let info = React.createElement('div', { className: 'additionalInfo', title: this.state.data.infoForPreview }, this.state.data.infoForPreview);
        let personInfo = React.createElement('div', { className: 'personInfo' }, name, info);

        let cardAva = React.createElement('img', { className: 'cardAva ava', src: this.state.data.photoUrl, alt: this.state.data.name});
        let cardContent = React.createElement('div', { className: 'cardContent' },personInfo, cardAva);

        this.component = React.createElement('div', { className: 'card' }, closeButtom, cardContent);
        }

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

    afterMount()
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