import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Buku } from 'src/app/model/Buku';
import { BukuService } from 'src/app/service/buku/buku.service';

@Component({
  selector: 'app-buku-new',
  templateUrl: './buku-new.component.html',
  styleUrls: ['./buku-new.component.css']
})
export class BukuNewComponent implements OnInit {
  @Input() buku?: Buku;
  constructor(
    private bukuService: BukuService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  // save Buku
  save(buku: Buku): void {
    console.log("bukuForm", buku);
    alert('Saving Buku...');
    this.bukuService.addBuku(buku).subscribe();
    this.location.back();
  }
}
