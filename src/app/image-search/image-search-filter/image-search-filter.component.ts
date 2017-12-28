import {Component, OnInit} from '@angular/core';
import * as Constant from '../../shared/utilities/constant.class';
import {Filter} from '../../shared/modal/filter.interface';
import {ImageSearchFilter} from '../modal/image-search-filter.interface';
import {ImageSearchService} from '../service/image-search.service';
import {PublicationType} from '../modal/publication-type.interface';

@Component({
  selector: 'discover-image-image-search-filter',
  templateUrl: './image-search-filter.component.html',
  styleUrls: ['./image-search-filter.component.scss']
})
export class ImageSearchFilterComponent implements OnInit {

  isbnFilter = '';
  titleFilter = '';
  authorFilter = '';
  imageTypeFilter = '';
  publicationTypeFilter: PublicationType[] = [];
  copyrightFilter = '';
  imageFilter = 'N';

  publicationTypes: PublicationType[] = [];

  FILTER_CONSTANT = Constant.IMAGE_FILTER;

  constructor(private imageSearchService: ImageSearchService) {
  }

  ngOnInit() {
    this.publicationTypes = [
      {name: 'Type 1', code: 'TYPE_1'},
      {name: 'Type 2', code: 'TYPE_2'}
    ];
  }

  isEmptyInput(input: string | null | undefined): boolean {
    const temp = (input !== null && input !== undefined) ? input.trim() : '';
    return temp.length === 0;
  }

  addFilterInSearch(filter: string, type: Filter): void {
    console.log(`Filter type: ${type} => ${filter}`);
    const imageFilter: ImageSearchFilter = {} as ImageSearchFilter;
    imageFilter.type = type;
    imageFilter.value = filter;
    this.imageSearchService.addImageFilter(imageFilter);
  }

  onPublicationTypeFilterChange(event: any) {
    console.log(event);
    console.log(`publicationTypeFilter => ${this.publicationTypeFilter}`);
  }
}
