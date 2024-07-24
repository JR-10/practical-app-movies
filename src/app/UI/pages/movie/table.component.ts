import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { GetMovieUseCases } from '../../../domain/usecase/get-movie-usecase';
import { ResponseMovieModel } from '../../../domain/models/movie/movie.model';
import { HelpersService } from '../../shared/helpers/helpers.service';
import { DataEndPoint } from '../../../domain/models/general.models';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})

export class TableComponent implements OnInit {

  dataMovies: Array<ResponseMovieModel> = [];

  constructor(
    private router: Router,
    private _getMovieUseCase: GetMovieUseCases,
    private  helpers: HelpersService,
  ) {
    this.getAllPersons();
  }

  ngOnInit(): void {}

  getAllPersons(): void {
    this._getMovieUseCase.getMovieAll()?.subscribe({
      next: (resp: DataEndPoint<Array<ResponseMovieModel>>) => {
        console.log('valor de la respuesta: ', resp);
        this.dataMovies = resp.results;
      },
      error: (_error: HttpErrorResponse) => {
        if (_error.status === 404){
          this.helpers.toast({ icon: 'warning', text: _error.error.message });
        } else {
          this.helpers.toast({ icon: 'error', text: _error.error.message });
        }
      },
    });
  }

  onSearch(){
    this.router.navigate(['/search']);
  }
}
