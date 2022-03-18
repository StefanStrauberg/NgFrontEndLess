import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { Post2Component } from './post2/post2.component';
import { Post4Component } from './post4/post4.component';

// In this decorator we register AppComponent
// Ng CLI automatically create and register a new component 
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    Post2Component,
    Post4Component
  ],
  // Imports smoethings modules
  imports: [
    BrowserModule,
    FormsModule // 2 Way Binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
