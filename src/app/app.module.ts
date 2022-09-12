import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TadaComponent } from './tada/tada.component';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './todo/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TadaComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
