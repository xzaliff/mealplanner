import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.page.html',
  styleUrls: ['./food-details.page.scss'],
})
export class FoodDetailsPage implements OnInit {

  meal: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.meal = this.route.snapshot.paramMap.get('meal');
  }

}
