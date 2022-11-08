import { Component, OnInit } from '@angular/core';
import { LISTINGS_DATA } from './mockListings';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  lists = LISTINGS_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
