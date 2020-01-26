import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EnterPageComponent} from './pages/enterPage/enter-page.component';
import {GamePageComponent} from './pages/gamePage/game-page.component';


const routes: Routes = [
  {path: '', component: EnterPageComponent},
  {path: 'game-page', component: GamePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
