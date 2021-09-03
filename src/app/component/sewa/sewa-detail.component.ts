import { Component, Input, OnInit } from '@angular/core';

import { Sewa } from 'src/app/model/Sewa';
import { Buku } from 'src/app/model/Buku';
import { Pelanggan } from 'src/app/model/Pelanggan';

import { SewaService } from 'src/app/service/sewa/sewa.service';
import { BukuService } from 'src/app/service/buku/buku.service';
import { PelangganService } from 'src/app/service/pelanggan/pelanggan.service';

@Component({
  selector: 'app-sewa-detail',
  templateUrl: './sewa-detail.component.html',
  styleUrls: ['./sewa-detail.component.css']
})
export class SewaDetailComponent implements OnInit {
  @Input() sewa?: Sewa;
  pelanggan: Pelanggan[] = [];
  buku: Buku[] = [];

  constructor(
    private bukuService: BukuService,
    private pelangganService: PelangganService,
    private sewaService: SewaService
  ) { }

  ngOnInit(): void {
    this.getAllPelanggan();
    this.getAllBuku();
  }

  goBack(){
    return this.sewa= undefined;
  }

  getAllPelanggan() {
    this.pelangganService.getAllPelanggan().subscribe(result => {
       this.pelanggan = result;
       console.log("pelanggan", this.pelanggan);
  });
}

getAllBuku() {
  this.bukuService.getAllBuku().subscribe(result => {
     this.buku = result;
     console.log("buku", this.pelanggan);
});
}

updateSewa(): void {
  if(this.sewa) {
    this.sewaService.updateSewa(this.sewa).subscribe();
  }
}

}
