import { Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { Comic, emptyComic } from '../interfaces/comic';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComicApiService {
  private LATEST_COMIC_URL: string = "https://xkcd.com/info.0.json";
  private COMIC_URL: string = "https://xkcd.com/";
  private maxComic: number = 0;
  comicData: WritableSignal<Comic> =  signal(emptyComic());
  private client: HttpClient;
  
  constructor(client: HttpClient) { 
    this.client = client;
    this.getLatestComic().subscribe((comic: Comic) => {
      this.comicData.set(comic);
      this.maxComic = comic.num;

    })
  }

  getLatestComic(): Observable<Comic>{
    return this.client.get<Comic>(this.LATEST_COMIC_URL).pipe(retry(1), catchError(this.handleError));
  }

  getComic(comicNum: number): void{
    this.client.get<Comic>(this.COMIC_URL + comicNum + "/info.0.json")
    .pipe(retry(1), catchError(this.handleError))
    .subscribe((comic: Comic) => this.comicData.set(comic));
  }

  getMaxComic(): number{
    return this.maxComic;
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
