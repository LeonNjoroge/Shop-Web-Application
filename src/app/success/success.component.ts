import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
  standalone:true,
})
export class SuccessComponent {

  constructor(private router:Router) { }

  navigateHome(){
    this.router.navigate(['/']);
  }

}
