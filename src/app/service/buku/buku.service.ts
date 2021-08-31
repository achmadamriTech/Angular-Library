import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';

import {Buku} from "src/app/model/Buku";
import { bukuSample } from 'src/app/buku-sample';

@Injectable({
  providedIn: 'root'
})
export class BukuService {

  constructor(
    private httpClient: HttpClient
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
      tap((result) => console.log('BukuService.updateBuku(): Buku Berhasil di Update'))
    )
  }


}
