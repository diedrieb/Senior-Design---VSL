import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {SharedService} from "../services/shared.service"
import {sampleListings} from "../listings/sampleListings"

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  
  constructor(private shared:SharedService) { }

  ngOnInit(): void {
  }
  userName='';
  userAddress='';
  userRent='';
  userType='';
  newType= 'idk';
  @Output() newListingCreated = new EventEmitter();

  onAddListing(){
    //this.newType=this.userType;
    const newList: sampleListings = { name: this.userName, address: this.userAddress, type: this.userType, rent: this.userRent};
    console.log(newList);
    //this.newListingCreated.emit(newList);
    this.shared.setMessage(newList);
  }


}
