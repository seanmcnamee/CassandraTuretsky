import { TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { ErrorAlertsService } from './error-alerts.service';
import { IErrorAlertsService } from './error-alerts.service.interface';

describe('ErrorAlertsService', () => {
  let service: IErrorAlertsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [{ provide: IErrorAlertsService, useValue: ErrorAlertsService }],
    });
    service = TestBed.inject(IErrorAlertsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});