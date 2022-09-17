import { TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { PortfolioImageService } from './portfolio-image.service';
import { IPortfolioImageService } from './portfolio-image.service.interface';

describe('PortfolioImageService', () => {
  let service: IPortfolioImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [{ provide: IPortfolioImageService, useValue: PortfolioImageService }],
    });
    service = TestBed.inject(IPortfolioImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
