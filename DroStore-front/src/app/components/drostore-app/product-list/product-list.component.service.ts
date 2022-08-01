import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './model/Book';

@Injectable()
export class BookService {
  private url = 'http://localhost:44382/api/bookstore';

  httpOptions = {
    Headers: { 'content-type': 'application/json' },
  };

  constructor(private http: HttpClient) {}

  getBook() {
    return this.http.get(this.url);
  }
}
