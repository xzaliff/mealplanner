import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {

  defaultMealPlan: string = 'balanced';
  includeSnacks: boolean = true;
  showNutritionalInfo: boolean = true;
  selectedLanguage: string = 'en';
  feedback: string = '';

  constructor() { }

  onLanguageChange() {
    console.log('Selected language: ' + this.selectedLanguage);
  }

  submitFeedback() {
    console.log('Feedback: ' + this.feedback);
  }
}

