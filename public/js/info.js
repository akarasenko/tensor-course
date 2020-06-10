import {Component} from './component.js'

export class Info extends Component{
    constructor (param)
    {
        super(param);
    }

    render() 
    {
        this.component = React.createElement('p', { className: 'info'}, 'Это страница школы Тензор в Уфе. Тут вы можете познакомиться с нашими учениками и посмотреть темы занятий.');
//      innerHTML like
//        '<p class="info">Это страница школы Тензор в Уфе. Тут вы можете познакомиться с нашими учениками и посмотреть темы занятий.</p>';
    }
}