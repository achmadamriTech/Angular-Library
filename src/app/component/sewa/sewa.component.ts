import { Component, OnInit } from '@angular/core';

import { Sewa } from 'src/app/model/Sewa';
import { SewaService } from 'src/app/service/sewa/sewa.service';
import { MessageService } from 'src/app/service/message/message.service';

@Component({
  selector: 'app-sewa',
  templateUrl: './sewa.component.html',
  styleUrls: ['./sewa.component.css']
})
export class SewaComponent implements OnInit {
  sewa: Sewa[] = [];

  constructor(
    private sewaService: SewaService,
    private msgSvc: MessageService

  ) { }

  ngOnInit(): void {
    this.getAllSewa();
  }

  getAllSewa() {
    this.sewaService.getAllSewa().subscribe(result => {
       this.sewa = result;
       console.log("sewa", this.sewa);
  });
}

delete(sewaId: any): void{
  this.msgSvc.add("Deleting Data Sewa with Id=" + sewaId);
  this.sewaService.deleteSewa(sewaId).subscribe();
}

}
