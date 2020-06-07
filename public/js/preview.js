import {Card} from './card.js'
import {Component} from './component.js'

export class Preview extends Component{
    constructor (props)
    {
        super(props);
    }

    render() 
    {
        return (
        <div class = {this.state.type}>
            <img class = "ava" src = {this.state.photoUrl} alt = {this.state.name}></img>
            <div class = "name" title={this.state.fullName}>${this.state.fullName}</div>
            <div class = "additionalInfo" title={this.state.infoForPreview}>{this.state.infoForPreview}</div>
        </div>
        );
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