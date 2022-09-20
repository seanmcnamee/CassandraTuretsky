import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortfolioImageService } from 'src/app/services/portfolio-image/portfolio-image.service';
import { IPortfolioImageService } from 'src/app/services/portfolio-image/portfolio-image.service.interface';

import { PortfolioFiltersComponent } from './portfolio-filters.component';

describe('PortfolioFiltersComponent', () => {
  let component: PortfolioFiltersComponent;
  let fixture: ComponentFixture<PortfolioFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioFiltersComponent ],
      providers: [{ provide: IPortfolioImageService, useClass: PortfolioImageService }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
