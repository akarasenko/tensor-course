import {DataSet} from './dataSet.js';
import {School} from './school.js';
import {Header} from './header.js';
import { Logo } from './logo.js';

let logo = new Logo();
logo.render();
let headerHtml =  document.querySelector("header");
logo.mount(headerHtml);

let header = new Header();
header.render();

header.mount(headerHtml);

const school = new School('Курс программирования');

let dataSet = new DataSet();

let peopleArr = dataSet.readAll().then(result => {
    result.forEach((item) => {
        school.add (item);
    })
});

console.log(school);



