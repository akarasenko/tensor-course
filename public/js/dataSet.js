import { Model } from "./model.js";

export class DataSet{
    constructor(options)
    {
        this.options = {
            host: "http://localhost:8080/api",
        }
    }

    query(query, options)
    {
        let url = new URL(this.options.host);
        url.pathname += query;
        return fetch(url, options).then( response => response.json() );
    }

    readAll()
    {
        return this.query('/person').then( response => {
            return response.map(element => this.toModel(element));
        });    
    }

    read(id)
    {
        return this.query(`/person/${id}`).then( response => { return this.toModel(response) });
    }

    toModel(obj)
    {
        return new Model(obj);
    }
}