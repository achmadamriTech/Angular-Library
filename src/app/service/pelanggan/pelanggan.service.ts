import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';

import {Pelanggan} from 'src/app/model/Pelanggan';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class PelangganService {

  constructor(
    private httpClient: HttpClient,
    private msgSvc: MessageService
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
      tap((result) => this.msgSvc.add('PelangganService.updatePelanggan(): Pelanggan Berhasil di Update')),
      catchError(this.msgSvc.handleError<Pelanggan[]>('updatePelanggan Failed'))
    )
  }
}
