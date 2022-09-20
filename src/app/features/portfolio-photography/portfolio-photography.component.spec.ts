import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortfolioImageService } from 'src/app/services/portfolio-image/portfolio-image.service';
import { IPortfolioImageService } from 'src/app/services/portfolio-image/portfolio-image.service.interface';

import { PortfolioPhotographyComponent } from './portfolio-photography.component';

describe('PortfolioPhotographyComponent', () => {
  let component: PortfolioPhotographyComponent;
  let fixture: ComponentFixture<PortfolioPhotographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioPhotographyComponent ],
      providers: [{ provide: IPortfolioImageService, useClass: PortfolioImageService }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioPhotographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
