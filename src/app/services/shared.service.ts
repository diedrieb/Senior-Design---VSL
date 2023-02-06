import { Injectable } from '@angular/core';
import { sampleListings } from '../listings/sampleListings';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  message!: sampleListings;
  constructor() { }
  
  setMessage(data: sampleListings) {
    this.message = data
  }
  getMessage() {
    return this.message
  }
}
