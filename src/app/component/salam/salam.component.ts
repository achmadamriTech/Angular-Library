import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-salam',
  templateUrl: './salam.component.html',
  styleUrls: ['./salam.component.css']
})
export class SalamComponent implements OnInit {
  title = 'library';
  todayDate = new Date();
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  currMonth = this.todayDate.getMonth();
  constructor() { }

  ngOnInit(): void {
    
  }

  sayHello(name: String): void{
    alert("Welcome " + name);  
  }

  alertMsg(msg: String): void{
    alert(msg); 
  }
}
