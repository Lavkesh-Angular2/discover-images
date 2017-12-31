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
    this.searchResults = [
      { name: 'Test 1', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { name: 'Test 2', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { name: 'Test 3', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { name: 'Test 4', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { name: 'Test 5', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { name: 'Test 6', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { name: 'Test 7', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { name: 'Test 8', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { name: 'Test 9', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { name: 'Test 10', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { name: 'Test 11', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { name: 'Test 12', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { name: 'Test 13', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg' }];

    this.imageFilters = this.imageSearchService.getImageFilters();

    const imageFilterChangeEvent = this.imageSearchService.imageFilterChangeEvent;
    imageFilterChangeEvent.subscribe((imageFilters: ImageSearchFilter[]) => { this.imageFilters = imageFilters; });
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
