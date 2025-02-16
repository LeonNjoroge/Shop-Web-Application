import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  activeTab: number | null= null;
  
  navItems= [
    { name: 'HOME', route: '/home', activeImg: 'assets/icons/home.svg', inactiveImg: 'assets/icons/home-bl.svg' },
    { name: 'CATEGORIES', route: '/home', activeImg: 'assets/icons/categories.svg', inactiveImg: 'assets/icons/categories-bl.svg' },
    { name: 'MY CART', route: '/cart', activeImg: 'assets/icons/cart.svg', inactiveImg: 'assets/icons/cart-bl.svg' },
    { name: 'PAYMENTS', route: '/home', activeImg: 'assets/icons/payments.svg', inactiveImg: 'assets/icons/payments-bl.svg' },
    { name: 'MORE', route: '/home', activeImg: 'assets/icons/more.svg', inactiveImg: 'assets/icons/more-bl.svg' }
  ];

 

  constructor(private router: Router) { }

  setActive(index:number){
    this.activeTab = index;
    this.router.navigate([this.navItems[index].route])
  }

  ngOnInit(): void {
  }

}
