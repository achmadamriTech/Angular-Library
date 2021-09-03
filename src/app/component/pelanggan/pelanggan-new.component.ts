import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';


import { Pelanggan } from 'src/app/model/Pelanggan';
import { PelangganService } from 'src/app/service/pelanggan/pelanggan.service';

@Component({
  selector: 'app-pelanggan-new',
  templateUrl: './pelanggan-new.component.html',
  styleUrls: ['./pelanggan-new.component.css']
})
export class PelangganNewComponent implements OnInit {
  @Input() pelanggan?: Pelanggan;
  constructor(
    private pelangganService: PelangganService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  save(pelanggan: Pelanggan): void {
    console.log("formPelanggan", pelanggan);
    alert('Saving Pelanggan...');
    this.pelangganService.addPelanggan(pelanggan).subscribe();
    this.location.back();
  }
}
