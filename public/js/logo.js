import {Component} from './component.js'

export class Logo extends Component{
    constructor (param)
    {
        super(param);
    }

    render() 
    {
        return  `<div>
            <img class = "logo" src = "/images/logo.jpg" alt = "logo">
            <span class = "title" title="logo">Tensor School</span>
            <div><span class = "line"></span></div>
        </div>`;
    }
}