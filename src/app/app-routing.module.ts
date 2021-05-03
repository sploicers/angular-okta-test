import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';
import { HeroesComponent } from './heroes/heroes.component';

const loginPath = 'login/callback'
const routeWhiteList: [string?] = [loginPath];

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: loginPath, component: OktaCallbackComponent }
];

routes
  .filter(route => !routeWhiteList.includes(route.path))
  .forEach(route => {
    route.canActivate = route.canActivate || [];
    route.canActivate.push(OktaAuthGuard)
  });

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
