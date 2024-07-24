import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieGateway } from '../models/movie/gateway/movie.gateway';
import { RequestMovieModel, ResponseMovieModel } from '../models/movie/movie.model';
import { DataEndPoint } from '../models/general.models';

@Injectable({
  providedIn: 'root'
})

export class GetMovieUseCases {

  constructor( private _movieGateWay: MovieGateway) {}


  getMovieAll(): Observable<DataEndPoint<Array<ResponseMovieModel>>> {
    return this._movieGateWay.getMovieAll();
  }

  getMovieFilter(filters: RequestMovieModel): Observable<DataEndPoint<Array<ResponseMovieModel>>> {
    return this._movieGateWay.getMovieFilter(filters);
  }

}
