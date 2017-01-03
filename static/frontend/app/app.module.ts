import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';

import { UrlFormComponent }  from './components/url_form.component';
import { AppComponent }  from './components/app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule],
  declarations: [ AppComponent, UrlFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
