import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';  // Import map operator for transformation
import { DomSanitizer } from '@angular/platform-browser';  // Import DomSanitizer for URL sanitization

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer  // Inject DomSanitizer for URL sanitization
  ) {}

  // Function to fetch data using GraphQL
  getProducts(): Observable<any> {
    return this.http.post<any>('https://api.escuelajs.co/graphql', {
      query: `{
        products {
          id
          title
          price
          images
        }
      }`
    })
    .pipe(
      map(result => this.sanitizeProductImages(result.data.products))  // Sanitize and process images
    );
  }
  
  sanitizeProductImages(products: any[]): any[] {
    return products.map(product => {
      // Select the first image from the array (if available)
      if (product.images && product.images.length > 0) {
        product.selectedImage = product.images[0];  // Set the first image as 'selectedImage'
      }
      return product;
    });
  }
}
