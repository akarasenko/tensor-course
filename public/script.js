class Student {
    constructor(param) {
       this.fullName = param.fullName;
       this.birthDate = param.birthDate;
       this.university = param.university;
       this.course = param.course;
       this.photoUrl = param.photoUrl;
    }

    get birthDateStr() {
      return this.birthDate;
    }

    get age() {
        let now = new Date();
        return now.getFullYear() - this.birthDate.getFullYear();
    }

    get education() {
        return this.university + ' ' + this.course + ' курс';
    }
}

function appendStudentBlock(student)
{
    let item = document.createElement('div');
    item.setAttribute('class', 'student');

    let ava = document.createElement('img');
    ava.setAttribute('class', 'ava');
    ava.setAttribute('src', student.photoUrl);
    ava.setAttribute('alt', student.name + ' ' + student.photoUrl);

    let name = document.createElement('div');
    name.setAttribute('class', 'name')
    let nameText = document.createTextNode(student.fullName);
    name.appendChild(nameText);

    let education = document.createElement('div');
    education.setAttribute('class', 'university');
    let educationText = document.createTextNode(student.education);
    education.appendChild(educationText);

    item.appendChild(ava);
    item.appendChild(name);
    item.appendChild(education);

    let students = document.getElementsByClassName("students")[0];

    students.appendChild(item);
    }

    const studentArr = [
        {
            fullName: 'Маша',
            university: 'УГАТУ',
            course: 2,
            birthDate: new Date(2000, 0, 1),
            photoUrl: '/images/avatars/ava1.jpg'
        },
        {
            fullName: 'Петя',
            university: 'МГУ',
            course: 4,
            birthDate: new Date(1997, 12, 31),
            photoUrl: '/images/avatars/ava2.jpg'
        },
     ];
     
     studentArr.forEach((item) => {
                const student = new Student(item);
                appendStudentBlock(student);
                }
    )
