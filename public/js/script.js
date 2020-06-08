
import {School} from './school.js';
import {Header} from './header.js';
import { Logo } from './logo.js';

let logo = new Logo();
logo.render();
let headerHtml =  document.querySelector("header");
logo.mount(headerHtml);

let header = new Header();
header.render();

let infoHeader = document.querySelector('.info');
header.mount(headerHtml);

const peopleArr = [
    {
        type: 'student',
        fullName: 'Маша',
        university: 'УГАТУ',
        course: 2,
        birthDate: new Date(2000, 2, 1),
        photoUrl: '/images/avatars/ava1.jpg'
    },
    {
        type: 'student',
        fullName: 'Саша',
        university: 'МГУ',
        course: 4,
        birthDate: new Date(1997, 12, 31),
        photoUrl: '/images/avatars/ava2.jpg'
    },
    {
        type: 'student',
        fullName: 'Анатолий',
        university: 'МГУ',
        course: 4,
        birthDate: new Date(1994, 11, 31),
        photoUrl: '/images/avatars/ava3.jpg'
    },
    {
        type: 'teacher',
        fullName: 'Андрей Иванович',
        position: 'Frontend разрабтчик',
        subject: 'Программирование на JavaScript',
        birthDate: new Date(2000, 7, 19),
        photoUrl: '/images/avatars/ava4.jpg'
    },
    {
        type: 'teacher',
        fullName: 'Василий Петрович',
        position: 'Backend разрабтчик',
        subject: 'Программирование на Java',
        birthDate: new Date(2001, 4, 14),
        photoUrl: '/images/avatars/ava5.jpg'
    },
    {
        type: 'teacher',
        fullName: 'Кузьма Александрович',
        position: 'Тестировщик',
        subject: 'Тестирование программного обеспечения',
        birthDate: new Date(1999, 10, 11),
        photoUrl: '/images/avatars/ava6.jpg'
    }
];

const school = new School('Курс программирования');

peopleArr.forEach((item) => {
    school.add (item);
});




