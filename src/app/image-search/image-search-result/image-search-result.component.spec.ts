import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSearchResultComponent } from './image-search-result.component';

describe('ImageSearchResultComponent', () => {
  let component: ImageSearchResultComponent;
  let fixture: ComponentFixture<ImageSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
