import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';  // Import map operator for transformation
import { SanitizeImageService } from './sanitize-image.service';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(
    private http: HttpClient,
    private imageSanitizer: SanitizeImageService
  ) {}

  // Function to fetch data using GraphQL
  getProducts(): Observable<any> {
    return this.http.post<any>('https://api.escuelajs.co/graphql', {
      query: `{
        products(limit: 15){
          id
          title
          price
          images
        }
      }`
      
    })
    .pipe(
      map(result => this.imageSanitizer.sanitizeProductImages(result.data.products))  // Sanitize and process images
    );
  }
  
  
}
