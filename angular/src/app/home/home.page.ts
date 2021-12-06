import { Component } from '@angular/core';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public formattedDate?: string;
  public dateValue?: string;

  constructor() {}

  formatDate() {
    this.formattedDate = format(parseISO(this.dateValue), 'MMM d, yyyy');
  }

}
