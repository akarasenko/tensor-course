export class Person {
    constructor (param) {
        this.id = param.id;
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