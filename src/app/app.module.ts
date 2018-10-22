import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { FormComponent } from './form/form.component';
import { MainComponent } from './main/main.component';
import { FilterService } from "./filter.service";
import { EditService } from './edit.service';
@NgModule({
  declarations: [
    AppComponent,
    FoodDetailsComponent,
    FormComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [FilterService,EditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
