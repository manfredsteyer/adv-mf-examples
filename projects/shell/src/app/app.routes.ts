import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import {
  startsWith,
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const URL = 'http://localhost:3000/remoteEntry.js';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },

  {
    path: 'flights',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: URL,
        exposedModule: './Module',
      }).then((m) => m.FlightsModule),
  },
  
  //import('mfe1/Module').then(m => m.FlightsModule)

  {
    path: '**',
    component: NotFoundComponent,
  },

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];

