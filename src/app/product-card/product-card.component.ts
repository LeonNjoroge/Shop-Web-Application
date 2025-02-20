import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [CommonModule]
  
})
export class ProductCardComponent implements OnInit {

  @Input() product:any

  constructor() { }

  ngOnInit(): void {
  }

}
