export class DataEndPoint<T> {
  results: T;
  page: number;
  total_pages: number;
  total_results: number;

  constructor(type?: T | undefined) {
    this.results = type!;
    this.page = 0;
    this.total_pages = 0;
    this.total_results = 0;
  }
}
