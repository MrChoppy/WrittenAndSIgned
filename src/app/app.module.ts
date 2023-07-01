import { NgModule } from '@angular/core';
import { initializeApp } from '@angular/fire/app';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FormsModule } from '@angular/forms';

import { QuoteComponent } from './components/quote/quote.component';
import { PoemComponent } from './components/poem/poem.component';
import { MusicComponent } from './components/music/music.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideDatabase, getDatabase } from '@angular/fire/database';

import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    PoemComponent,
    MusicComponent,
    NavMenuComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
})
export class AppModule {}
