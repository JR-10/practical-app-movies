import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MovieGateway } from '../domain/models/movie/gateway/movie.gateway';
import { MovieAdapterService } from '../infraestructure/driven-adapter/movie-adapter/movie-adapter.service';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    { provide: MovieGateway, useClass: MovieAdapterService },
  ]
};
