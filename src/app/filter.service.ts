import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filter(arr,val) {
    if(val == 1) {
      return arr;
    } else if(val == 2) {
      let highArr = arr.filter(elem => {
        return elem.calories > 500;
      })
      return highArr
    } else if(val == 3) {
      return arr.filter(elem => {
        return (elem.calories<500 && elem.calories > 0);
      })
    }

  }
  constructor() { }
}
