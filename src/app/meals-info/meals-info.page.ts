import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-meals-info',
  templateUrl: './meals-info.page.html',
  styleUrls: ['./meals-info.page.scss'],
})
export class MealsInfoPage implements OnInit {
  searchQuery: string = '';
  meals: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {}

  searchFood(query: string) {
    if (!query) {
      this.meals = [];
      return;
    }
  
    const appId = '1ff8d75c';
    const appKey = 'f8b5200413fc9467de6b8f30008f2898';
    const url = `https://api.edamam.com/api/food-database/v2/parser?ingr=${query}&app_id=${appId}&app_key=${appKey}`;
  
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        this.meals = response.data.hints.map((hint: any) => ({
          name: hint.food.label,
          description: hint.food.category,
          image: hint.food.image,
          nutrients: hint.food.nutrients,
        }));
      })
      .catch((error) => {
        console.log(error);
        // handle the error here
      });
  }

  selectMeal(meal: any) {
    this.router.navigate(['food-details'], { state: { meal: meal } });
  }

 
}


