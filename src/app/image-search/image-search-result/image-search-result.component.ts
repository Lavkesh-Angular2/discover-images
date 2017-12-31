import { Component, OnInit } from '@angular/core';
import {ImageSearchFilter} from '../modal/image-search-filter.interface';
import {ImageSearchResult} from '../modal/image-search-result.interface';
import {ImageSearchService} from '../service/image-search.service';

@Component({
  selector: 'discover-image-image-search-result',
  templateUrl: './image-search-result.component.html',
  styleUrls: ['./image-search-result.component.scss']
})
export class ImageSearchResultComponent implements OnInit {

  searchInput: string;
  imageFilters: ImageSearchFilter[] = [];
  searchResults: ImageSearchResult[] = [];

  constructor(private imageSearchService: ImageSearchService) {
  }

  ngOnInit() {
   this.getFilterImages();
    this.imageFilters = this.imageSearchService.getImageFilters();
    const imageFilterChangeEvent = this.imageSearchService.imageFilterChangeEvent;
    imageFilterChangeEvent.subscribe((imageFilters: ImageSearchFilter[]) => { this.imageFilters = imageFilters; });
  }


  getFilterImages() {
    this.imageSearchService.getFilterImages().subscribe(data => {
      this.searchResults = data;
    });
  }

  hasSearchInput(): Boolean {
    return this.imageFilters.length > 0;
  }

  removeSearchInput(filter: ImageSearchFilter): void {
    this.imageSearchService.removeImageFilter(filter);
  }

  displayImageDetailSection(selectedImageResult: ImageSearchResult) {
    this.imageSearchService.setSelectedImageForDetailsView(selectedImageResult);
  }

  displaySearchResultTileView(): boolean {
    return !this.imageSearchService.showImageSearchDetailView();
  }

  displaySearchResultDetailsView(): boolean {
    return this.imageSearchService.showImageSearchDetailView();
  }

}
