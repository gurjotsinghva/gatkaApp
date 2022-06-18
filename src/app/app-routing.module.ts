import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { RoundsComponent } from './rounds/rounds.component';

const routes: Routes = [
  { path: 'players', component: PlayersComponent },
  { path: 'rounds', component: RoundsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
