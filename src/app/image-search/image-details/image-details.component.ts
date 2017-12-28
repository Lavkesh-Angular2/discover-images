import { Component, OnInit } from '@angular/core';
import {ImageSearchResult} from '../modal/image-search-result.interface';
import {ImageSearchService} from '../service/image-search.service';

@Component({
  selector: 'discover-image-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.scss']
})
export class ImageDetailsComponent implements OnInit {

  selectedImage: ImageSearchResult | undefined;

  constructor(private imageSearchService: ImageSearchService) { }

  ngOnInit() {
    this.selectedImage = this.imageSearchService.getSelectedImageForDetailsView();
  }

  goToImageSearchTileView(): void {
    this.imageSearchService.setSelectedImageForDetailsView(undefined);
  }

}
