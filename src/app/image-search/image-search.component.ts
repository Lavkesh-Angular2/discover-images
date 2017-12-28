import {Component, OnInit} from '@angular/core';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {Utility} from '../shared/utilities/utility.class';

@Component({
  selector: 'discover-image-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.scss']
})
export class ImageSearchComponent implements OnInit {

  isMobileLayout: Boolean = false;

  constructor(private media: ObservableMedia) {
  }

  ngOnInit() {
    this.media.subscribe((change: MediaChange) => {
      this.isMobileLayout = Utility.isMobileLayout(change);
    });
  }
}
