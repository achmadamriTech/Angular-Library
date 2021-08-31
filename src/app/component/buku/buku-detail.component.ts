import { Component, Input, OnInit } from '@angular/core';

import { Buku } from 'src/app/model/Buku';
import {BukuService} from 'src/app/service/buku/buku.service';

@Component({
  selector: 'app-buku-detail',
  templateUrl: './buku-detail.component.html',
  styleUrls: ['./buku-detail.component.css']
})
export class BukuDetailComponent implements OnInit {
  @Input() buku?: Buku;

  constructor(
    private bukuService: BukuService
  ) { }

  ngOnInit(): void {
  }

  // Kembali
  goBack(){
    this.buku = undefined;
  }

  updateBuku(): void{
    if (this.buku) {
      this.bukuService.updateBuku(this.buku).subscribe();
    }
  }
}
