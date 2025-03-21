import { Component } from '@angular/core';
import { ComicApiService } from '../../services/comic-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comic-view',
  imports: [CommonModule],
  templateUrl: './comic-view.component.html',
  styleUrl: './comic-view.component.css',
})
export class ComicViewComponent {
  service: ComicApiService;
  comicInputValue: string = '0';

  constructor(ComicApiService: ComicApiService) {
    this.service = ComicApiService;
  }

  comicIsMax(): boolean {
    return this.service.comicData().num != this.service.getMaxComic();
  }

  comicIsMin(): boolean {
    return this.service.comicData().num != 1;
  }

  comicInput($event: Event) {
    this.comicInputValue = ($event.target as HTMLInputElement).value;
  }

  getComic() {
    let comicNumber = parseInt(this.comicInputValue);
    if (comicNumber > 0 && comicNumber <= this.service.getMaxComic()) {
      this.service.getComic(comicNumber);
    }
  }
}
