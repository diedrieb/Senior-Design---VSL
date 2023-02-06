import { Component, OnInit } from '@angular/core';
import { LISTINGS_DATA } from './mockListings';
import { MatDialog } from  '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import {SharedService} from "../services/shared.service"

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

  constructor(private dialogRef: MatDialog, private shared: SharedService) { }
  
  openDialog(){
    this.dialogRef.open(PopupComponent);
  }


  ngOnInit(): void {
    console.log("message: ", this.shared.getMessage());
    if (this.shared.getMessage() != null){
      this.lists.push(this.shared.getMessage());
      //this.shared.setMessage(null);
    }
  }
  
  
}
