import {Card} from './card.js'
import {Component} from './component.js'

export class Preview extends Component{
    constructor (param)
    {
        super(param);
        this.onClick = this.onClickEvent.bind;
        this.state =
        {
            data: param,
            openedCard: undefined,
        };
    }

    render() 
    {
        let ava = React.createElement('img', { className: 'ava', src: this.state.data.photoUrl, alt: this.state.data.name});
        let name = React.createElement('div', { className: 'name', title: this.state.data.fullName}, this.state.data.fullName);
        let info = React.createElement('div', { className: 'additionalInfo', title: this.state.data.infoForPreview }, this.state.data.infoForPreview);
        this.component = React.createElement('div', { className: this.state.data.type, onClick: () => this.onClickEvent(), key: this.state.data.id, openedcard: this.state.openedCard }, ava, name, info);
 
//       return  `<div class = "${this.data.type}">
//                    <img class = "ava" src = "${this.data.photoUrl}" alt = "${this.data.name}">
//                    <div class = "name" title="${this.data.fullName}">${this.data.fullName}</div>
//                    <div class = "additionalInfo" title="${this.data.infoForPreview}">${this.data.infoForPreview}</div>
//                </div>`;
    }

    onClickEvent()
    {      
        // не работает

        let card = new Card(this.state.data);
        card.render();
        this.setState( {openedCard: card.component });
        let cardHtml = document.querySelector('.cardPlace');
        ReactDOM.render(card.component, cardHtml);
    }
}