import { Component} from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone:true,
  styleUrls: ['./home.component.scss'],
  imports:[SearchComponent],
})
export class HomeComponent {

  user: string = "Tosh";
  constructor() { }

}
