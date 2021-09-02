import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';

import {Buku} from "src/app/model/Buku";
import { bukuSample } from 'src/app/buku-sample';
import { MessageService } from 'src/app/service/message/message.service';

@Injectable({
  providedIn: 'root'
})
export class BukuService {

  constructor(
    private httpClient: HttpClient,
    public msgSvc: MessageService
  ) { }

  buku: Buku[] = bukuSample;

  svcUrl = 'http://localhost:8888/buku/';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  }

  testDataBuku(): Buku[] {
    return this.buku;
  }

  getAllBuku(): Observable<Buku[]>{
    const dataBuku = this.httpClient.get<Buku[]>(this.svcUrl)

    return dataBuku;
  }

  updateBuku(buku: Buku): Observable<any>{
    const svcUrl = this.svcUrl + buku.id;

    return this.httpClient.put(svcUrl, buku, this.httpOptions).pipe(
      tap((result) => this.msgSvc.add('BukuService.updateBuku(): Buku Berhasil di Update')),
      catchError(this.msgSvc.handleError<Buku[]>('updateBuku Failed'))
    )
  }

  addBuku(buku: Buku): Observable<any>{

    return this.httpClient.post(this.svcUrl, buku, this.httpOptions).pipe(
      tap((result) => this.msgSvc.add('BukuService.addBuku(): Buku Berhasil di Tambah')),
      catchError(this.msgSvc.handleError<Buku[]>('addBuku() Failed'))
    )
  }

  deleteBuku(buku: Buku): Observable<any>{
    const svcUrl = this.svcUrl + buku.id ;

    return this.httpClient.delete(svcUrl).pipe(
      tap((result) => this.msgSvc.add('BukuService.deleteBuku(): Buku Berhasil di Hapus')),
      catchError(this.msgSvc.handleError<Buku[]>('deleteBuku() Failed'))
    )
  }

  manggil(name: String): void{
    console.log("Nama Muncul");
  }
}
