import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LISTINGS_DATA } from '../listings/mockListings';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  lists = LISTINGS_DATA;

  constructor() { }
  

  ngOnInit(): void {
  }

}
