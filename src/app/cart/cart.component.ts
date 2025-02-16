import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone:true,
})
export class CartComponent {

  constructor(private router: Router) { }

  navigateToSuccess(){
    this.router.navigate(['/success']);
  }


}
