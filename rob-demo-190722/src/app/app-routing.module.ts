import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './modules/shared/buttons/buttons.component';
import { TextComponent } from './modules/shared/text/text.component';
import { CommonModule } from '@angular/common';
import { InputComponent } from './modules/shared/input/input.component';


const routes: Routes = [ 
  { path: 'buttons', component: ButtonsComponent },
  { path: 'text', component: TextComponent},
  { path: 'input', component: InputComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes),
  CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
