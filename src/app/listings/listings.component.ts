import { Component, OnInit } from '@angular/core';
import { LISTINGS_DATA } from './mockListings';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  lists = LISTINGS_DATA;
  /*myDist = [];
  addToLikes(lists){
    // will extract the related key from Object here to push it in array
    this.myDist.push(lists);
 }*/

  constructor() { }

  ngOnInit(): void {
  }

}
