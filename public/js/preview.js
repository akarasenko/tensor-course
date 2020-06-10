import {Card} from './card.js'
import {Component} from './component.js'

export class Preview extends Component{
    constructor (param)
    {
        super(param);
    }

    render() 
    {
        let ava = React.createElement('img', { className: 'ava', src: this.data.photoUrl, alt: this.data.name});
        let name = React.createElement('div', { className: 'name', title: this.data.fullName}, this.data.fullName);
        let info = React.createElement('div', { className: 'additionalInfo', title: this.data.infoForPreview }, this.data.infoForPreview);
        this.component = React.createElement('div', { className: this.data.type, onClick: this.onClickEvent(this.data) }, ava, name, info);
 
//       return  `<div class = "${this.data.type}">
//                    <img class = "ava" src = "${this.data.photoUrl}" alt = "${this.data.name}">
//                    <div class = "name" title="${this.data.fullName}">${this.data.fullName}</div>
//                    <div class = "additionalInfo" title="${this.data.infoForPreview}">${this.data.infoForPreview}</div>
//                </div>`;
    }

    onClickEvent(data)
    {      
        let card = new Card(data);
        let cardHtml = document.querySelector('.cardPlace');
        card.mount(cardHtml);
    }
}