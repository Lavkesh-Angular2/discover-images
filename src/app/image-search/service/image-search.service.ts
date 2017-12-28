import {EventEmitter, Injectable} from '@angular/core';
import {ImageSearchFilter} from '../modal/image-search-filter.interface';
import * as lodash from 'lodash';
import {Filter} from '../../shared/modal/filter.interface';
import {ImageSearchResult} from '../modal/image-search-result.interface';

@Injectable()
export class ImageSearchService {

  public imageFilterChangeEvent: EventEmitter<ImageSearchFilter[]> = new EventEmitter();
  private imageFilters: ImageSearchFilter[] = [];
  private selectedImageForDetailsView: ImageSearchResult | undefined;

  constructor() {
  }

  getImageFilters(): ImageSearchFilter[] {
    return this.imageFilters;
  }

  addImageFilter(filter: ImageSearchFilter) {
    const index: number = this.getImageFilterIndex(filter);
    if (index === -1) {
      this.imageFilters.push(filter);
      this.imageFilterChangeEvent.emit(this.imageFilters);
    }
  }

  removeImageFilter(filter: ImageSearchFilter) {
    const index: number = this.getImageFilterIndex(filter);
    if (index >= 0) {
      lodash.pullAt(this.imageFilters, index);
      this.imageFilterChangeEvent.emit(this.imageFilters);
    }
  }

  getImageFilterIndex(filter: ImageSearchFilter): number {
    if (filter !== null && filter !== undefined) {
      const checkEuqality = (o: ImageSearchFilter) => this.checkImageFilterEqual(o, filter);
      return lodash.findIndex(this.imageFilters, checkEuqality);
    }
    return -1;
  }

  setSelectedImageForDetailsView(selectedImage: ImageSearchResult | undefined) {
    this.selectedImageForDetailsView = selectedImage;
  }

  getSelectedImageForDetailsView(): ImageSearchResult | undefined {
    return this.selectedImageForDetailsView;
  }

  showImageSearchDetailView(): boolean {
    return !(this.selectedImageForDetailsView === null || this.selectedImageForDetailsView === undefined);
  }

  checkImageFilterEqual(obj1: ImageSearchFilter, obj2: ImageSearchFilter): boolean {
    if (obj1 === null || obj1 === undefined || obj2 === null || obj2 === undefined) {
      return false;
    }

    const obj1Type = (obj1.type || {}) as Filter;
    const obj1TypeCode = obj1Type.code || '';
    const obj1Val = obj1.value || '';

    const obj2Type = (obj2.type || {}) as Filter;
    const obj2TypeCode = obj2Type.code || '';
    const obj2Val = obj2.value || '';

    return obj1TypeCode.trim() === obj2TypeCode.trim() && obj1Val.trim() === obj2Val.trim();
  }
}
