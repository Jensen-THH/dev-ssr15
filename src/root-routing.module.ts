import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './app/modules/general/home/home.component';
import { NotFoundComponent } from './app/modules/general/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },

  {
    path: 'about',
    loadChildren: () => import('./app/modules/general/about/about.module')
      .then(mod => mod.AboutModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./app/modules/general/login/login.module')
      .then(mod => mod.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./app/modules/general/signup/signup.module')
      .then(mod => mod.SignupModule)
  },

  {
    path: 'httpclient',
    loadChildren: () => import('./app/modules/application/items/items.module')
      .then(mod => mod.ItemsModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./app/modules/general/contact/contact.module')
      .then(mod => mod.ContactModule)
  },
  {
    path: 'bootstrap',
    loadChildren: () => import('./app/modules/application/example-bootstrap/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./app/modules/application/example-components/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./app/modules/application/example-forms/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./app/modules/application/example-services/tutorial.module')
      .then(mod => mod.TutorialModule)
  },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule],
  declarations: []
})
export class RootRoutingModule { }