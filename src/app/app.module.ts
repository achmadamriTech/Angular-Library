import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,  } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { SalamComponent } from './component/salam/salam.component';
import { BukuComponent } from './component/buku/buku.component';
import { PelangganComponent } from './component/pelanggan/pelanggan.component';
import { SewaComponent } from './component/sewa/sewa.component';
import { BukuDetailComponent } from './component/buku/buku-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    SalamComponent,
    BukuComponent,
    PelangganComponent,
    SewaComponent,
    BukuDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
