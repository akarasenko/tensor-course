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

    renderPreview() {
        let item = createElementWithClassesText('div', [this.type]);
        
        let ava = createImageWithClasses(['ava'], this.photoUrl, this.fullName);

        let name = createElementWithClassesText('div', ['name'], this.fullName);

        let info = createElementWithClassesText('div', ['additionalInfo'], this.infoForPreview);

        item.appendChild(ava);
        item.appendChild(name);
        item.appendChild(info);

        return item;
    }

    appendPreviewToDOM() {
        const layout = this.renderPreview();

        let students = document.getElementsByClassName("people")[0];
        students.appendChild(layout);

        layout.addEventListener('click', (event) => {
            this.openCard(this, event.currentTarget);
        });
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


    renderCard() {
        let card = createElementWithClassesText('div', ['card']);

        let closeButton = createElementWithClassesText('div', ['close']);
        closeButton.addEventListener('click', (event) => this.closeCard(event.currentTarget));

        let info = createElementWithClassesText('div', ['cardInfo']);

        let name = createElementWithClassesText('div', ['name'], this.fullName);
        let education = createElementWithClassesText('div', ['additionalInfo'], this.education);
        let birthDate = createElementWithClassesText('div', ['additionalInfo'], this.birthDateStr);
        let age = createElementWithClassesText('div', ['additionalInfo'], this.age);

        info.appendChild(name);
        info.appendChild(education);
        info.appendChild(birthDate);
        info.appendChild(age);

        let ava = createImageWithClasses(['cardAva', 'ava'], this.photoUrl, this.name);

        card.appendChild(closeButton);
        card.appendChild(info);
        card.appendChild(ava);

        return card;
    }

    openCard() 
    {
        let currentCards = document.getElementsByClassName('close');
        if (currentCards.length != 0)
        {
            for (let card of currentCards) 
                {
                    this.closeCard(card);
                }
        }

        let card = this.renderCard();
        document.body.appendChild(card);
    }

    closeCard(element) {
        let card = element.parentNode;
        card.parentNode.removeChild(card);
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

        return instanse;
    }
}


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

const factory = new PersonFactory();

peopleArr.forEach((item) => {
    const person = factory.create(item);
    const block = person.appendPreviewToDOM();
});



