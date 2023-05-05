import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverlayComponent } from './overlay/overlay.component';
import { HomeComponent } from './pages/home/home.component';
import { PlayersComponent } from './pages/players/players.component';
import { RoundsComponent } from './pages/rounds/rounds.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'display', component: PlayersComponent },
  { path: 'rounds', component: RoundsComponent },
  { path: 'overlay', component: OverlayComponent },
  { path: 'timer', component: TimerComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
