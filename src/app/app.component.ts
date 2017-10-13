import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public wHeight = 6;
  public wWidth = 6;
  public top = 1;
  public left = 1;
  title = 'app';
  public widgets: any;
  constructor() {
    let count = 1;
    this.widgets = [{ id: 1, title: 'SALES PERFORMANCE', config: { row: 1, col: 1, sizex: 1 }},
    { id: 2, title: 'INVENTORY MANAGEMENT', config: { row: 1, col: 2, sizex: 1 } },
    { id: 3, title: 'CONSUMER INSIGHTS', config: { row: 2, col: 3, sizex: 1 } },
    { id: 4, title: 'PROMOTION EFFECTIVENESS', config: { row: 2, col: 4, sizex: 1 } },
    { id: 5, title: 'AVAILABILITY OPPORTUNITIES', config: { row: 2, col: 5, sizex: 2 } },
    { id: 6, title: 'DEMAND SHAPING OPPORTUNITIES', config: { row: 2, col: 6, sizex: 1 } }];
    this.widgets.map((w) => {
      // w.config = { row: 1, col: count, unitx: 1 };
      // this.left = count * this.wWidth + 1;
      // if ((100 - count * this.left) < this.wWidth) {
      //   this.top = this.top + this.wHeight;
      //   this.left = 1;
      //   count = 0;
      // }
      count++;
    });
  }
}
