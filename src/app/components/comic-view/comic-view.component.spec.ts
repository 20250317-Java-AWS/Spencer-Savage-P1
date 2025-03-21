import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicViewComponent } from './comic-view.component';

describe('ComicViewComponent', () => {
  let component: ComicViewComponent;
  let fixture: ComponentFixture<ComicViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComicViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
