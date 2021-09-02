import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Sewa } from 'src/app/model/Sewa';
import { Observable } from 'rxjs';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class SewaService {
  

  constructor(
    private httpClient: HttpClient,
    private msgSvc: MessageService
  ) { }

  svcUrl = 'http://localhost:8888/sewa/detail/';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  }

  getAllSewa(): Observable<Sewa[]>{
    const dataSewa = this.httpClient.get<Sewa[]>(this.svcUrl)

    return dataSewa;
  }

}
