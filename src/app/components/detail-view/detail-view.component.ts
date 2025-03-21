import { Component } from '@angular/core';
import { ComicApiService } from '../../services/comic-api.service';

@Component({
  selector: 'app-detail-view',
  imports: [],
  templateUrl: './detail-view.component.html',
  styleUrl: './detail-view.component.css'
})
export class DetailViewComponent {
  service: ComicApiService;

  constructor(service: ComicApiService) {
    this.service = service;
  }

}
