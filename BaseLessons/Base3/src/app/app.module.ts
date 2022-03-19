import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StyleDirective } from './Directives/style.directive';
import { Style2Directive } from './Directives/style2.directive';

@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
    Style2Directive
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
