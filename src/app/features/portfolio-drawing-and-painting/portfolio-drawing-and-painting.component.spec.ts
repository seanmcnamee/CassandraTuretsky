import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortfolioImageService } from 'src/app/services/portfolio-image/portfolio-image.service';
import { IPortfolioImageService } from 'src/app/services/portfolio-image/portfolio-image.service.interface';

import { PortfolioDrawingAndPaintingComponent } from './portfolio-drawing-and-painting.component';

describe('PortfolioDrawingAndPaintingComponent', () => {
  let component: PortfolioDrawingAndPaintingComponent;
  let fixture: ComponentFixture<PortfolioDrawingAndPaintingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioDrawingAndPaintingComponent ],
      providers: [{ provide: IPortfolioImageService, useClass: PortfolioImageService }],
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
