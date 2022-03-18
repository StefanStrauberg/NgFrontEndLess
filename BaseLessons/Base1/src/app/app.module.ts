import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';

// In this decorator we register AppComponent 
@NgModule({
  declarations: [
    AppComponent,
    PostComponent
  ],
  // Imports smoethings modules
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
