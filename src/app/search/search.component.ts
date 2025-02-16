import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input'


@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports: [MatIconModule, MatInputModule]
  
})
export class SearchComponent implements OnInit {



  ngOnInit(): void {
  }

}
