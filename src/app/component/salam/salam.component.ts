import { Component, OnInit } from '@angular/core';

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

}
