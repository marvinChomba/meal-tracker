import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Food } from '../food';
@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {
  @Input() foods:Food;
  @Output() editFood = new EventEmitter<Food>();
  constructor() { }

  ngOnInit() {
  }

}
