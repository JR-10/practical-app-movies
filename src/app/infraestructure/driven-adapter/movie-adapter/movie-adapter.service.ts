import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MovieGateway } from '../../../domain/models/movie/gateway/movie.gateway';
import { RequestMovieModel, ResponseMovieModel } from '../../../domain/models/movie/movie.model';
import { DataEndPoint } from '../../../domain/models/general.models';

@Injectable({
  providedIn: 'root'
})

export class MovieAdapterService extends MovieGateway {

  private _url: string;


  constructor(private http: HttpClient) {
    super();
    this._url = `${environment.backend}`;
}

  getMovieAll(): Observable<DataEndPoint<Array<ResponseMovieModel>>> {
    const url = `${this._url}`;
    return this.http.get<DataEndPoint<Array<ResponseMovieModel>>>(url);
  }

  getMovieFilter(filters: RequestMovieModel): Observable<ResponseMovieModel> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("documentType", String(filters.filter1));
    queryParams = queryParams.append("documentNumber", String(filters.filter2));
    const url = `${this._url}/person-filter`;
    return this.http.get<ResponseMovieModel>(url, { params: queryParams });
  }

}
