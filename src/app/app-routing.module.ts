import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverlayComponent } from './overlay/overlay.component';
import { HomeComponent } from './pages/home/home.component';
import { PlayersComponent } from './pages/players/players.component';
import { RoundsComponent } from './pages/rounds/rounds.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'players', component: PlayersComponent },
  { path: 'rounds', component: RoundsComponent },
  { path: 'overlay', component: OverlayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
