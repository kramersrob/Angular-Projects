import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { HeadersComponent } from './headers/headers.component';
import { InputComponent } from './input/input.component';
import { TextComponent } from './text/text.component';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './wrapper/wrapper.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [ 
]

@NgModule({
  declarations: [
    ButtonsComponent,
    HeadersComponent,
    InputComponent,
    TextComponent,
    WrapperComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    BrowserModule,
    CommonModule
  ],
  exports: [
    ButtonsComponent,
    HeadersComponent,
    InputComponent,
    TextComponent,
    RouterModule
  ]
})
export class SharedModule { }
