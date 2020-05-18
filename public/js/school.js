import {Factory} from './factory.js';

export class School {
    constructor(name) {
        this.name = name;
        this.list = [];
    }

    add (person) {
        let personToAdd = Factory.create(person);
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