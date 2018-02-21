import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from './../../providers/dataService';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchTerm: string = '';
  items: any;

  constructor(public navCtrl: NavController,
    private dataService: DataService) {

  }

  ionViewWillEnter() {
   // this.setFilteredItems();
  }

  setFilteredItems() {
    this.items = this.dataService.filterItems(this.searchTerm);

  }

}
