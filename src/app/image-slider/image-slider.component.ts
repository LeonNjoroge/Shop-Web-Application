import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  standalone:true,
  imports:[CommonModule]
})
export class ImageSliderComponent {

  images: string[] = [
    'assets/icons/Kyosk-digital.svg',
    'assets/icons/categories.svg',
    'assets/icons/home.svg',
  ];
  currentIndex: number = 0;
}
