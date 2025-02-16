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
    'https://source.unsplash.com/800x400/?nature,1',
    'https://source.unsplash.com/800x400/?nature,2',
    'https://source.unsplash.com/800x400/?nature,3'
  ];
  currentIndex: number = 0;
}
