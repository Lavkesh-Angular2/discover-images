import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSearchFilterComponent } from './image-search-filter.component';

describe('ImageSearchFilterComponent', () => {
  let component: ImageSearchFilterComponent;
  let fixture: ComponentFixture<ImageSearchFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSearchFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
