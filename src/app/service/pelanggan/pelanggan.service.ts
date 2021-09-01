import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';

import {Pelanggan} from 'src/app/model/Pelanggan';

@Injectable({
  providedIn: 'root'
})
export class PelangganService {

  constructor(
    private httpClient: HttpClient
  ) { }
  
  svcUrl = 'http://localhost:8888/pelanggan/';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  }

  getAllPelanggan(): Observable<Pelanggan[]>{
    const dataPelanggan = this.httpClient.get<Pelanggan[]>(this.svcUrl)

    return dataPelanggan;
  }

  updatePelanggan(pelanggan: Pelanggan): Observable<any>{
    const svcUrl = this.svcUrl + pelanggan.id;

    return this.httpClient.put(svcUrl, pelanggan, this.httpOptions).pipe(
      tap((result) => console.log('PelangganService.updatePelanggan(): Pelanggan Berhasil diUpdate'))
    )
  }
}
