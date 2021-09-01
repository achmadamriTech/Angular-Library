import { Component, OnInit } from '@angular/core';

import { Pelanggan } from 'src/app/model/Pelanggan';
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
    private pelangganService: PelangganService
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

}
