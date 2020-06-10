import {DataSet} from './dataSet.js';
import {Previews} from './previews.js';
import {Info} from './info.js';
import {Logo} from './logo.js';

let logo = new Logo();
let logoHtml =  document.querySelector('.logoPage');
logo.mount(logoHtml);

let info = new Info();
let infoHtml = document.querySelector('.infoPage');
info.mount(infoHtml);

let previews;

let dataSet = new DataSet();
dataSet.readAll().then( result => {
    previews = new Previews({ dataSet: result });

    let previewsHtml = document.querySelector('.people');
    previews.mount(previewsHtml);
    })






