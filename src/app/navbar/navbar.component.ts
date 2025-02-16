import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  activeTab: number | null= null;
  
  navItems= [
    { name: 'HOME', activeImg: 'assets/icons/home.svg', inactiveImg: 'assets/icons/home-bl.svg' },
    { name: 'CATEGORIES', activeImg: 'assets/icons/categories.svg', inactiveImg: 'assets/icons/categories-bl.svg' },
    { name: 'MY CART', activeImg: 'assets/icons/cart.svg', inactiveImg: 'assets/icons/cart-bl.svg' },
    { name: 'PAYMENTS', activeImg: 'assets/icons/payments.svg', inactiveImg: 'assets/icons/payments-bl.svg' },
    { name: 'MORE', activeImg: 'assets/icons/more.svg', inactiveImg: 'assets/icons/more-bl.svg' }
  ];

  setActive(index:number){
    this.activeTab = index;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
