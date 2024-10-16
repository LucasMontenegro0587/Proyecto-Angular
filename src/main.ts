import { platformBrowserDynamyc } from '@angular/platform-browser-dynamic';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';

platformBrowserDynamyc().bootstrapApplication(AppModule,AppComponent, appConfig, {
  ngZoneEventCoalescing: true
})
  .catch(err) => console.error(err))
