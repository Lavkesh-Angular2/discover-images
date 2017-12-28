import {NgModule} from '@angular/core';

import {ImageSearchRoutingModule} from './image-search-routing.module';
import {ImageSearchComponent} from './image-search.component';
import {SharedModule} from '../shared/shared.module';
import { ImageSearchFilterComponent } from './image-search-filter/image-search-filter.component';
import { ImageSearchService } from './service/image-search.service';
import { ImageSearchResultComponent } from './image-search-result/image-search-result.component';
import { ImageDetailsComponent } from './image-details/image-details.component';

@NgModule({
  imports: [
    SharedModule,
    ImageSearchRoutingModule
  ],
  declarations: [
    ImageSearchComponent,
    ImageSearchFilterComponent,
    ImageSearchResultComponent,
    ImageDetailsComponent
  ],
  providers: [ImageSearchService]
})
export class ImageSearchModule {
}
