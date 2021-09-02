import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BukuNewComponent } from './component/buku/buku-new.component';
import { BukuComponent } from './component/buku/buku.component';
import { PelangganNewComponent } from './component/pelanggan/pelanggan-new.component';
import { PelangganComponent } from './component/pelanggan/pelanggan.component';
import { SalamComponent } from './component/salam/salam.component';
import { SewaNewComponent } from './component/sewa/sewa-new.component';
import { SewaComponent } from './component/sewa/sewa.component';

const routes: Routes = [
  {path:"", component:SalamComponent},
  {path:"buku", component:BukuComponent},
  {path:"pelanggan", component:PelangganComponent},
  {path:"sewa", component:SewaComponent},
  {path:"bukuForm", component:BukuNewComponent},
  {path:"pelangganForm", component:PelangganNewComponent},
  {path:"sewaForm", component:SewaNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
