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
import { PelangganDetailComponent} from './component/pelanggan/pelanggan-detail.component';
import { BukuNewComponent } from './component/buku/buku-new.component';
import { MessageComponent } from './component/message/message.component';
import { PelangganNewComponent } from './component/pelanggan/pelanggan-new.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    SalamComponent,
    BukuComponent,
    PelangganComponent,
    SewaComponent,
    BukuDetailComponent,
    PelangganDetailComponent,
    BukuNewComponent,
    MessageComponent,
    PelangganNewComponent
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
