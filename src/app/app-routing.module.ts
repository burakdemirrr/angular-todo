import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TadaComponent } from './tada/tada.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path:"todo",component:TodoComponent},
  {path:"tada",component:TadaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
