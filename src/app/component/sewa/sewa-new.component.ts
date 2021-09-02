import { Component, Input, OnInit } from '@angular/core';
import { Buku } from 'src/app/model/Buku';
import { Pelanggan } from 'src/app/model/Pelanggan';

import { SewaService } from 'src/app/service/sewa/sewa.service';
import { BukuService } from 'src/app/service/buku/buku.service';
import { PelangganService } from 'src/app/service/pelanggan/pelanggan.service';
import { Sewa } from 'src/app/model/Sewa';

@Component({
  selector: 'app-sewa-new',
  templateUrl: './sewa-new.component.html',
  styleUrls: ['./sewa-new.component.css']
})
export class SewaNewComponent implements OnInit {
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

save(sewa: Sewa): void {
  console.log("formSewa", sewa);
  alert('Saving Data Buku...');
  this.sewaService.addSewa(sewa).subscribe();
}

}