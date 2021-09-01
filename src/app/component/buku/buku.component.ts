import { Component, OnInit } from '@angular/core';

import { Buku } from 'src/app/model/Buku';
import { BukuService } from 'src/app/service/buku/buku.service';
import { MessageService } from 'src/app/service/message/message.service';

@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrls: ['./buku.component.css']
})
export class BukuComponent implements OnInit {
  buku: Buku[] = [];
  jmlBuku = 0;

  selectedBuku?: Buku;

  constructor(
    private bukuService : BukuService,
    private msgSvc: MessageService
  ) { }

  ngOnInit(): void {
  //  alert(this.bukuService.test());
  // this.buku= this.bukuService.testDataBuku();
    this.getAllBuku();
    this.jmlBuku = this.buku.length;
}

    getAllBuku() {
      this.bukuService.getAllBuku().subscribe(result => this.buku = result);
    }

    onSelectBuku(buku: Buku){
      this.selectedBuku = buku;
    }

    delete(bukuId: any): void{
      this.msgSvc.add("Deleting buku with Id=" + bukuId);
      this.bukuService.deleteBuku(bukuId).subscribe();
    }
}
