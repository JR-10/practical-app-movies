import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { GetMovieUseCases } from '../../../domain/usecase/get-movie-usecase';
import { ResponseMovieModel } from '../../../domain/models/movie/movie.model';
import { HelpersService } from '../../shared/helpers/helpers.service';
import { DataEndPoint } from '../../../domain/models/general.models';
import { FormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterPipeModule, NgxPaginationModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})

export class TableComponent implements OnInit {

  dataMovies: Array<ResponseMovieModel> = [];
  totalItems!: number;
  itemsPerPage!: number;
  currentPage: number = 1;

  movieFilter: any = { original_title: '' };


  constructor(
    private _getMovieUseCase: GetMovieUseCases,
    private  helpers: HelpersService,
  ) {
    this.getMovies(this.currentPage);
  }

  ngOnInit(): void {}

  getMovies(currentPage: number): void {
    this._getMovieUseCase.getMovieFilter({page:currentPage})?.subscribe({
      next: (resp: DataEndPoint<Array<ResponseMovieModel>>) => {
        this.dataMovies = resp.results;
        this.currentPage = resp.page;
        this.itemsPerPage = resp.results.length;
        this.totalItems = resp.total_results;
      },
      error: (_error: HttpErrorResponse) => {
        this.helpers.toast({ icon: 'error', text: 'Error de servidor' });
      },
    });
  }

  onPageChange(numberPage: number) {
    this.currentPage = numberPage;
    this.getMovies(numberPage)
  }

  onPageBoundsCorrection(numberPage: number) {
    this.currentPage = numberPage;
  }

}
