import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  street: string;
  type: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Jake', street: '123 rohs street', type: 'house'},
  {name: 'Paul', street: '65 calhoun street', type: 'house'},
  {name: 'Amy', street: '908 bishop street', type: 'apt'},
  {name: 'Opal', street: '77 ludlow street', type: 'house'},
  {name: 'Ben', street: '332 eden ave', type: 'apt'},
  {name: 'Carly', street: '808 MLK road', type: 'apt'},
  {name: 'Naim', street: '6573 chickasaw street', type: 'apt'},
  {name: 'Ophelia', street: '896 Ohio ave', type: 'apt'},
  {name: 'Pam', street: '56 Vine Street', type: 'house'},
  {name: 'Thomas', street: '456 West Mcmillan Street', type: 'condo'},
];

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  displayedColumns: string[] = ['demo-name', 'demo-street', 'demo-type'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
