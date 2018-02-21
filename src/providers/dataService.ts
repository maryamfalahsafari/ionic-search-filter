import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class DataService {

    public items: any[] = [];

    constructor(private http: Http) {
        this.items = [
            { title: 'one' },
            { title: 'two' },
            { title: 'three' },
            { title: 'four' },
            { title: 'five' },
            { title: 'six' }]
    }

    filterItems(searchItem) {
        return this.items.filter((item) => {
            return item.title.toLowerCase().indexOf(searchItem.toLowerCase()) > -1;
        });
    }


}