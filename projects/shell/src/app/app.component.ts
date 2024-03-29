import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { WebComponentWrapper, WebComponentWrapperOptions, startsWith } from '@angular-architects/module-federation-tools';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'shell';
  
  constructor(router: Router) {

    // Talk to backand about micro frontends
    
    // const microfrontends = [
    //   {
    //     path: 'flights',
    //     loadChildren: () => 
    //       // import('mfe1/Module')
    //       loadRemoteModule({
    //         type: 'module',
    //         remoteEntry: 'http://localhost:3000/remoteEntry.js',
    //         exposedModule: './Module'
    //       })
    //     .then(m => m.FlightsModule)
    //   },

      
    // ];

    // const routes = [...microfrontends, ...APP_ROUTES];

    // router.resetConfig(routes);

  }
}


/*

            {
        //path: 'react',
        matcher: startsWith('react'), // react/a/b/c
        component: WebComponentWrapper,
        data: {
          remoteEntry: 'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
          remoteName: 'react',
          exposedModule: './web-components',
          elementName: 'react-element'
        } as WebComponentWrapperOptions
      },
*/
