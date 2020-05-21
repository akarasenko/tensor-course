import {Card} from './card.js'
import {Component} from './component.js'

export class Preview extends Component{
    constructor (param)
    {
        super(param);
    }

    render() 
    {
        return  `<div class = "${this.data.type} info">
            <img class = "ava" src = "${this.data.photoUrl}" alt = "${this.data.name}">
            <div class = "name" title="${this.data.fullName}">${this.data.fullName}</div>
            <div class = "additionalInfo" title="${this.data.infoForPreview}">${this.data.infoForPreview}</div>
        </div>`;
    }

    afterMount()
    {
        this.component.addEventListener('click', (event) => 
        {
            let card = new Card(this.data);
            
            card.mount(document.body);
        })
    }
}