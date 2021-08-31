import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BukuComponent } from './component/buku/buku.component';
import { PelangganComponent } from './component/pelanggan/pelanggan.component';
import { SalamComponent } from './component/salam/salam.component';
import { SewaComponent } from './component/sewa/sewa.component';

const routes: Routes = [
  {path:"", component:SalamComponent},
  {path:"buku", component:BukuComponent},
  {path:"pelanggan", component:PelangganComponent},
  {path:"sewa", component:SewaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
