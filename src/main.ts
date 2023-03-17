import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { RootModule } from './root.module';


function bootstrap() {
  platformBrowserDynamic().bootstrapModule(RootModule)
    .catch(err => console.error(err));
}


if (document.readyState === 'complete') {
  bootstrap();
} else {
  document.addEventListener('DOMContentLoaded', bootstrap);
}

