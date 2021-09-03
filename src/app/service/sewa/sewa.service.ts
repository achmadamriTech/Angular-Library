import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Sewa } from 'src/app/model/Sewa';
import { Observable } from 'rxjs';
import { MessageService } from '../message/message.service';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SewaService {
  

  constructor(
    private httpClient: HttpClient,
    private msgSvc: MessageService
  ) { }

  svcUrl = 'http://localhost:8888/sewa/detail/';
  svcUrls = 'http://localhost:8888/sewa/';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  }

  getAllSewa(): Observable<Sewa[]>{
    const dataSewa = this.httpClient.get<Sewa[]>(this.svcUrl)

    return dataSewa;
  }

  addSewa(sewa: Sewa): Observable<any>{

    return this.httpClient.post(this.svcUrls, sewa, this.httpOptions).pipe(
      tap((result) => this.msgSvc.add('SewaService.addSewa(): Sewa Berhasil di Tambah')),
      catchError(this.msgSvc.handleError<Sewa[]>('addSewa() Failed'))
    )
  }

  deleteSewa(sewa: Sewa): Observable<any>{
    const svcUrl = this.svcUrls + sewa.id ;

    return this.httpClient.delete(svcUrl).pipe(
      tap((result) => this.msgSvc.add('sewaService.deletesewa(): Data Sewa Berhasil di Hapus')),
      catchError(this.msgSvc.handleError<Sewa[]>('deleteSewa() Failed'))
    )
  }

  updateSewa(sewa: Sewa): Observable<any>{
    const svcUrls = this.svcUrls + sewa.id;

    return this.httpClient.put(svcUrls, sewa, this.httpOptions).pipe(
      tap((result) => this.msgSvc.add('sewaService.updateSewa(): Data Sewa Berhasil di Update')),
      catchError(this.msgSvc.handleError<Sewa[]>('updateSewa Failed'))
    )
  }

}
