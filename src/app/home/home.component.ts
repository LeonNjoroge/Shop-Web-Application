import { Component} from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { ImageSliderComponent } from '../image-slider/image-slider.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone:true,
  styleUrls: ['./home.component.scss'],
  imports:[SearchComponent, ImageSliderComponent],
})
export class HomeComponent {

  user: string = "Tosh";
  constructor() { }

}
