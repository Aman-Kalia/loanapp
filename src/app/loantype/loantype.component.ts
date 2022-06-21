import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loantype',
  templateUrl: './loantype.component.html',
  styleUrls: ['./loantype.component.css']
})
export class LoantypeComponent implements OnInit {
  
  myFunction(){
    alert("Your Loan has been applied successfully")
  }

  constructor() { }

  ngOnInit(): void {
   
  }
}
