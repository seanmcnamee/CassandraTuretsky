import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortfolioImageService } from 'src/app/services/portfolio-image/portfolio-image.service';
import { IPortfolioImageService } from 'src/app/services/portfolio-image/portfolio-image.service.interface';

import { PortfolioSculptureComponent } from './portfolio-sculpture.component';

describe('PortfolioSculptureComponent', () => {
  let component: PortfolioSculptureComponent;
  let fixture: ComponentFixture<PortfolioSculptureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioSculptureComponent ],
      providers: [{ provide: IPortfolioImageService, useClass: PortfolioImageService }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioSculptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
