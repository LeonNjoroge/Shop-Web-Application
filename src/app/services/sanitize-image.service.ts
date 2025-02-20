import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';  // Import DomSanitizer for URL sanitization
import { GraphqlService } from './graphql.service';

@Injectable({
  providedIn: 'root'
})
export class SanitizeImageService {

  constructor(private sanitizer: DomSanitizer) { }


  sanitizeProductImages(products: any[]): any[] {
    return products.map(product => {
      
      if (product.images && product.images.length > 0) {
        product.selectedImage = product.images[0];  
      }
      return product;
    });
  }
}
