import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { RootComponent } from './root.component';

import { RootModule } from './root.module';

@NgModule({
  imports: [
    RootModule,
    ServerModule,
  ],
  bootstrap: [RootComponent],
})
export class AppServerModule {}
