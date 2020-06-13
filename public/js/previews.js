import {Component} from './component.js';
import {Factory} from './factory.js';
import {Preview} from './preview.js';
import { Card } from './card.js';

export class Previews extends Component{
    constructor(param)
    {
        super(param);
        this.list = [];
        this.dataSet = param.dataSet;
    }

    render()
    {
        this.dataSet.forEach( (item) => {
            let person = Factory.create(item);
            let preview = new Preview(person);
            preview.render();
            this.list.push(preview.component);
        })

        this.component = React.createElement('div', undefined, this.list);
    }
}