import { Component, OnInit} from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { GraphqlService } from '../services/graphql.service';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';






@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone:true,
  styleUrls: ['./home.component.scss'],
  imports:[SearchComponent, CommonModule, ProductCardComponent],

})
export class HomeComponent implements OnInit{

    user: string = "Tosh";
    products: any[] = [];

   
  
    constructor(private graphqlService: GraphqlService) { }
  
    ngOnInit(): void {
   
      this.graphqlService.getProducts().subscribe((result: any) => {
        this.products = result.slice(6, 10);; 
        
      });
     
    }
  
}
