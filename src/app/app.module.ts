import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';


// Services
import { CrudService } from './services/crud.service';
  
// Importing forms module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    BookListComponent,
    BookDetailComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,


  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    CrudService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
