import { Observable } from "rxjs";
import { RequestMovieModel, ResponseMovieModel } from "../movie.model";
import { DataEndPoint } from "../../general.models";

export abstract class MovieGateway {

  abstract getMovieAll(): Observable<DataEndPoint<Array<ResponseMovieModel>>>;

  abstract getMovieFilter(filters: RequestMovieModel ): Observable<ResponseMovieModel>;
}
