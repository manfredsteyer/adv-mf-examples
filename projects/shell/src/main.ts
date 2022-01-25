import { loadRemoteEntry } from '@angular-architects/module-federation';

loadRemoteEntry({ type: 'module', remoteEntry: 'http://localhost:3000/remoteEntry.js'})

import('./bootstrap')
	.catch(err => console.error(err));
