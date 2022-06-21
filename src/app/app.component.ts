import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loanapp';
  salary:any;

  constructor(private router:Router){}
   mysal(){
    // let salary = document.getElementByName("sal").value;
      
    // console.log(salary)
  }
  
}
