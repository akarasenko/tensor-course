class Student {
    constructor(param) {
        this.fullName = param.fullName;
        this.birthDate = param.birthDate;
        this.university = param.university;
        this.course = param.course;
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

    get education() {
        return this.university + ' ' + this.course + ' курс';
    }

    renderPreview() {
        let item = createElementWithClassesText('div', ['student']);

        let ava = createImageWithClasses(['ava'], this.photoUrl, this.fullName);

        let name = createElementWithClassesText('div', ['name'], this.fullName);

        let education = createElementWithClassesText('div', ['additionalInfo'], this.education);

        item.appendChild(ava);
        item.appendChild(name);
        item.appendChild(education);

        return item;
    }

    appendPreviewToDOM() {
        const layout = this.renderPreview();

        let students = document.getElementsByClassName("students")[0];
        students.appendChild(layout);

        layout.addEventListener('click', (event) => {
            this.openCard(this, event.currentTarget);
        });
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

const studentArr = [
    {
        fullName: 'Маша',
        university: 'УГАТУ',
        course: 2,
        birthDate: new Date(2000, 02, 1),
        photoUrl: '/images/avatars/ava1.jpg'
    },
    {
        fullName: 'Саша',
        university: 'МГУ',
        course: 4,
        birthDate: new Date(1997, 12, 31),
        photoUrl: '/images/avatars/ava2.jpg'
    },
    {
        fullName: 'Анатолий',
        university: 'МГУ',
        course: 4,
        birthDate: new Date(1994, 11, 31),
        photoUrl: '/images/avatars/ava3.jpg'
    },
    {
        fullName: 'Андрей',
        university: 'УРФУ',
        course: 3,
        birthDate: new Date(2000, 07, 19),
        photoUrl: '/images/avatars/ava4.jpg'
    },
    {
        fullName: 'Василий',
        university: 'МГУ',
        course: 3,
        birthDate: new Date(2001, 04, 14),
        photoUrl: '/images/avatars/ava5.jpg'
    },
    {
        fullName: 'Кузя',
        university: 'СПБГУ',
        course: 5,
        birthDate: new Date(1999, 10, 11),
        photoUrl: '/images/avatars/ava6.jpg'
    }
];

studentArr.forEach((item) => {
    const student = new Student(item);
    const studentBlock = student.appendPreviewToDOM();
});

