import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-homepage-page',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss']
})
export class HomepagePage implements OnInit {
  days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  meals: {
    [key: string]: { name: string; category: string; description: string }[];
  } = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: []
  };

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {}

  addMeal(day: string) {
    const name = prompt(`Add a meal name for ${day}`);
    const category = prompt(`Add a meal category for ${day}`);
    const description = prompt(`Add a meal description for ${day}`);
    if (name !== null && category !== null && description !== null) {
      const meal = { name, category, description };
      this.meals[day].push(meal);
      // Add the following line to trigger change detection for the newly added meal
      this.meals[day] = [...this.meals[day]];
    }
  }

  async deleteMeal(day: string, index: number): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete this meal?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.meals[day].splice(index, 1);
            this.changeDetector.detectChanges();
          }
        }
      ]
    });
    await alert.present();
  }

  openCart(): void {
    this.navCtrl.navigateForward('/cart');
  }

  clearDay(day: string): void {
    if (this.meals[day].length > 0) {
      const confirmDelete = confirm(`Are you sure you want to clear all meals for ${day}?`);
      if (confirmDelete) {
        this.meals[day] = [];
      }
    }
  }
  
  // Implement your shopping cart logic here
}




