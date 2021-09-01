import { Component, OnInit } from '@angular/core';

import { Pelanggan } from 'src/app/model/Pelanggan';
import { MessageService } from 'src/app/service/message/message.service';
import { PelangganService } from 'src/app/service/pelanggan/pelanggan.service';

@Component({
  selector: 'app-pelanggan',
  templateUrl: './pelanggan.component.html',
  styleUrls: ['./pelanggan.component.css']
})
export class PelangganComponent implements OnInit {

  pelanggan: Pelanggan[] = [];

  selectedPelanggan?: Pelanggan;

  constructor(
    private pelangganService: PelangganService,
    private msgSvc: MessageService
  ) { }

  ngOnInit(): void {
    this.getAllPelanggan();
  }

  getAllPelanggan() {
    this.pelangganService.getAllPelanggan().subscribe(result => {
       this.pelanggan = result;
       console.log("pelanggan", this.pelanggan);
  });
}

  onSelectPelanggan(pelanggan: Pelanggan){
    this.selectedPelanggan = pelanggan;
  }

  delete(pelangganId: any): void{
    this.msgSvc.add("Deleting pelanggan with Id=" + pelangganId);
    this.pelangganService.deletePelanggan(pelangganId).subscribe();
  }

}
