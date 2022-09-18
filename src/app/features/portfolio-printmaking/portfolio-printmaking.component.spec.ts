import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortfolioImageService } from 'src/app/services/portfolio-image/portfolio-image.service';
import { IPortfolioImageService } from 'src/app/services/portfolio-image/portfolio-image.service.interface';

import { PortfolioPrintmakingComponent } from './portfolio-printmaking.component';

describe('PortfolioPrintmakingComponent', () => {
  let component: PortfolioPrintmakingComponent;
  let fixture: ComponentFixture<PortfolioPrintmakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioPrintmakingComponent ],
      providers: [{ provide: IPortfolioImageService, useClass: PortfolioImageService }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioPrintmakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
