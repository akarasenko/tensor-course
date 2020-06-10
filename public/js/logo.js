import {Component} from './component.js'

export class Logo extends Component{
    constructor (param)
    {
        super(param);
    }

    render() 
    {
        let img = React.createElement('img', { className: 'logo', src: '/images/logo.jpg', alt: 'logo'});
        let title = React.createElement('span', { className: 'title', title: 'logo'}, 'Tensor School');
        let comp = React.createElement('div', undefined,  img, title);
        
 // innerHTML like       
 //           '<img class = "logo" src = "/images/logo.jpg" alt = "logo">
 //           <span class = "title" title="logo">Tensor School</span>
 //           <div><span class = "line"></span></div>'

        this.component = comp;
    }
}