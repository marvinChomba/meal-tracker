import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Food } from '../food';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // @Input() foods:Food[];
  // newFood:Food;
  // newFood:Food = new Food("","","");
  @Input() newFood:Food;
  constructor() { 
  }
  ngOnInit() {
  }
  @Output() adder = new EventEmitter<Food>();
  addFood() {
    this.adder.emit(this.newFood);
    this.newFood = new Food("","","");
  }



}
