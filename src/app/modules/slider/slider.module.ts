import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'primeng/carousel';
import { SliderRoutingModule } from './slider-routing.module';
import { SliderComponent } from './components/slider/slider.component';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [SliderComponent],
  imports: [
    CommonModule,
    SliderRoutingModule,
    HttpClientModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
  ],
})
export class SliderModule {}
