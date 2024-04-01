import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PlaceholderComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    PlaceholderComponent
  ]
})
export class SharedModule { }
