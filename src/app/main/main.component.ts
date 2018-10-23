import { Component, OnInit } from '@angular/core';
import { Food } from "../food";
import { FilterService } from "../filter.service"
import * as $ from "jquery"
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  newFood = new Food("","","");
  foods:Food[] = [
    new Food("Chicken","100","It's fingerlicking good"),
    new Food("Meat","600","Aight"),
    new Food("Jollof","800","Nasty"),
    new Food("Samosa","250","Tasty")
  ]
  clone = this.foods;
  constructor(private filterer:FilterService) {

  }
  addFood(food) {
    if(food.edit) {
      this.foods.unshift(food);
    }
  }
  filterItems() {
    let value = $("#filter").val();
    this.foods = this.filterer.filter(this.clone,value);
  }
  foodEditter(food:Food) {
    this.newFood = food;
    food.edit = false;
  }

  

  
  ngOnInit() {
  }

}
