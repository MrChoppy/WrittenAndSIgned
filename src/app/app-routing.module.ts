import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoemComponent } from './components/poem/poem.component';
import { MusicComponent } from './components/music/music.component';
import { QuoteComponent } from './components/quote/quote.component';
const routes: Routes = [
  { path: '', component: QuoteComponent },
  { path: 'quote', component: QuoteComponent },
  { path: 'poem', component: PoemComponent },
  { path: 'music', component: MusicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
