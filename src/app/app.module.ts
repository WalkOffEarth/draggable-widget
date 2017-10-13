import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgDraggableWidgetModule } from 'ngx-draggable-widget';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgDraggableWidgetModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
