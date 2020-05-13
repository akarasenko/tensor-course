function createElementWithClassesText(tagName, classNames, text) {
    let item = document.createElement(tagName);

    if (classNames != undefined) {
        classNames.forEach(className => {
            item.classList.add(className);
        })
    }

    if (text != undefined) {
        let innerText = document.createTextNode(text);
        item.appendChild(innerText);
    }

    return item;
}

function createImageWithClasses(classNames, src, alt) {
    let ava = createElementWithClassesText('img', classNames);
    ava.setAttribute('src', src);
    ava.setAttribute('alt', alt);

    return ava;
}
//////////////////////////////////////////////////////////////////

class Person {
    constructor (param) {
        this.type = param.type;
        this.fullName = param.fullName;
        this.birthDate = param.birthDate;
        this.photoUrl = param.photoUrl;
    }

    get birthDateStr() {
        return 'Дата рождения: ' + this.birthDate.getDate() + '.'
            + this.birthDate.getMonth() + '.'
            + this.birthDate.getFullYear();
    }

    get age() {
        let now = new Date();
        return 'Возраст: ' + (now.getFullYear() - this.birthDate.getFullYear());
    }
}

class Student extends Person {
    constructor(param) {
        super(param);
        this.university = param.university;
        this.course = param.course;
    }   

    get education() {
        return this.university + ' ' + this.course + ' курс';
    }

    get infoForPreview()  {
        return this.education;
    }

    infoForCard() {
        let info = createElementWithClassesText('div', ['personInfo']);

        let name = createElementWithClassesText('div', ['name'], this.fullName);
        let education = createElementWithClassesText('div', ['additionalInfo'], this.education);
        let birthDate = createElementWithClassesText('div', ['additionalInfo'], this.birthDateStr);
        let age = createElementWithClassesText('div', ['additionalInfo'], this.age);

        info.appendChild(name);
        info.appendChild(education);
        info.appendChild(birthDate);
        info.appendChild(age);

        return info;
    }
}

class Teacher extends Person{
    constructor(param)
    {
        super(param);
        this.position = param.position;
        this.subject = param.subject;
    }

    subjectToStr() {
        return 'Куратор курса: ' + this.subject;
    }

    get infoForPreview()  {
        return this.subjectToStr();
    }

    infoForCard() {
        let info = createElementWithClassesText('div', ['personInfo']);

        let name = createElementWithClassesText('div', ['name'], this.fullName);
        let position = createElementWithClassesText('div', ['additionalInfo'], this.position);
        let subject = createElementWithClassesText('div', ['additionalInfo'], this.subject);

        info.appendChild(name);
        info.appendChild(position);
        info.appendChild(subject);

        return info;
    }
}


class School {
    constructor(name) {
        this.name = name;
        this.factory = new PersonFactory();
        this.list = [];
    }

    add (person) {
        let personToAdd = this.factory.create(person);
        this.list.push(personToAdd);
    }

    removeByName (name) {
        this.list = this.list.filter(person => person.fullName != name);

    }

    getByName(name)
    {
        return this.list.filter(person => { return (person.fullName == name)})[0];
    }
}

class PersonFactory{
    createPerson(param)
    {
        return new Person(param);
    }
    createStudent(param)
    {
        return new Student(param);
    }
    createTeacher(param)
    {
        return new Teacher(param);
    }

    create (param)
    {
        let instanse;

        switch(param.type){
            case 'student': { instanse = this.createStudent(param); break;} 
            case 'teacher': { instanse = this.createTeacher(param); break;}
            default: { instanse = this.createPerson(param); break; }
        }

        const preview = new Preview({type: 'personPreview'});
        preview.appendPreviewToDOM(instanse);

        return instanse;
    }
}

class Preview {
    constructor (param)
    {
        this.type = param.type;
    }

    renderPreview(person) 
    {
        let item = createElementWithClassesText('div', [person.type]);

        if (this.type == 'personPreview')
        {        
            let ava = createImageWithClasses(['ava'], person.photoUrl, person.fullName);

            let name = createElementWithClassesText('div', ['name'], person.fullName);

            let info = createElementWithClassesText('div', ['additionalInfo'], person.infoForPreview);

            item.appendChild(ava);
            item.appendChild(name);
            item.appendChild(info);
        }

        return item;
    }

    appendPreviewToDOM(person) {
        const layout = this.renderPreview(person);

        let students = document.getElementsByClassName("people")[0];
        students.appendChild(layout);

        layout.addEventListener('click', (event) => {
            let card = new Card({type:'personInfo'});
            card.openCard(card.type, person);
        });
    }
}

class Card {
    constructor(param)
    {
        this.type = param.type;
    }

    renderCard(person) {
        let card = createElementWithClassesText('div', ['card']);

        if (this.type == "personInfo")
        {
            let closeButton = createElementWithClassesText('div', ['close']);
            closeButton.addEventListener('click', (event) => this.closeCard(event.currentTarget));

            let content = createElementWithClassesText('div', ['cardContent']);

            let info = person.infoForCard();
            
            let ava = createImageWithClasses(['cardAva', 'ava'], person.photoUrl, person.fullName);

            content.appendChild(info);
            content.appendChild(ava);

            card.appendChild(closeButton);
            card.appendChild(content);
        }    
        return card;
    }

    openCard(type, person) 
    {
        let currentCards = document.getElementsByClassName('close');
        if (currentCards.length != 0)
        {
            for (let card of currentCards) 
                {
                    this.closeCard(card);
                }
        }

        let card = this.renderCard(person);
        document.body.appendChild(card);
    }

    closeCard(element) {
        let card = element.parentNode;
        card.parentNode.removeChild(card);
    }

}

const peopleArr = [
    {
        type: 'student',
        fullName: 'Маша',
        university: 'УГАТУ',
        course: 2,
        birthDate: new Date(2000, 02, 1),
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
        birthDate: new Date(2000, 07, 19),
        photoUrl: '/images/avatars/ava4.jpg'
    },
    {
        type: 'teacher',
        fullName: 'Василий Петрович',
        position: 'Backend разрабтчик',
        subject: 'Программирование на Java',
        birthDate: new Date(2001, 04, 14),
        photoUrl: '/images/avatars/ava5.jpg'
    },
    {
        type: 'teacher',
        fullName: 'Кузьма Александрович',
        position: 'Тестировщик',
        subject: 'Тестирование',
        birthDate: new Date(1999, 10, 11),
        photoUrl: '/images/avatars/ava6.jpg'
    }
];

const school = new School('Курс программирования');

peopleArr.forEach((item) => {
    school.add (item);
});




