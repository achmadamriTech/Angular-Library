import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { SalamComponent } from './component/salam/salam.component';
import { BukuComponent } from './component/buku/buku.component';
import { PelangganComponent } from './component/pelanggan/pelanggan.component';
import { SewaComponent } from './component/sewa/sewa.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    SalamComponent,
    BukuComponent,
    PelangganComponent,
    SewaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
