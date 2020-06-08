import {Component} from './component.js'

export class Header extends Component{
    constructor (param)
    {
        super(param);
    }

    render() 
    {
        return  '<p class="info">Это страница школы Тензор в Уфе. Тут вы можете познакомиться с нашими учениками и посмотреть темы занятий.</p>';
    }
}