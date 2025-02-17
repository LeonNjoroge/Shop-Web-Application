import { Component, OnInit} from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { GraphqlService } from '../services/graphql.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone:true,
  styleUrls: ['./home.component.scss'],
  imports:[SearchComponent, CommonModule],
  providers:[GraphqlService]
})
export class HomeComponent implements OnInit{

    user: string = "Tosh";
    products: any[] = [];
  
    constructor(private graphqlService: GraphqlService) { }
  
    ngOnInit(): void {
      // Fetch products and images from the service
      this.graphqlService.getProducts().subscribe((result: any) => {
        this.products = result;  // The data is already sanitized at this point
      });
    }
  
}
