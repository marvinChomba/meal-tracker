import { Injectable } from '@angular/core';
import { Food } from "./food"
@Injectable({
  providedIn: 'root'
})
export class EditService {

  constructor() {}
  edit(arr) {
    arr.forEach(element => {
      if(element.clicked) {
        return element
      } else {
        return new Food("","","")
      }
    });
  }
}
