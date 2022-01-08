import { Component, OnInit } from '@angular/core';
import { SliderService } from '../../slider-services/slider.service';
import { Product } from 'src/models/Product';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  products: Product[] = [];

  responsiveOptions;

  constructor(private sliderService: SliderService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {
    this.sliderService
      .getAllProducts()
      .subscribe((data) => (this.products = data));
  }

  warning() {
    alert(
      'I did not add any functionality to these buttons but, the page looks better with them.'
    );
  }
}
