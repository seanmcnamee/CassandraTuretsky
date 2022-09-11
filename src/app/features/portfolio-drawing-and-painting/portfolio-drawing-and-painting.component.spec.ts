import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDrawingAndPaintingComponent } from './portfolio-drawing-and-painting.component';

describe('PortfolioDrawingAndPaintingComponent', () => {
  let component: PortfolioDrawingAndPaintingComponent;
  let fixture: ComponentFixture<PortfolioDrawingAndPaintingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioDrawingAndPaintingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioDrawingAndPaintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
