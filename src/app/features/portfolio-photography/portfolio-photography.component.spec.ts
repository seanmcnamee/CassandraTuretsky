import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPhotographyComponent } from './portfolio-photography.component';

describe('PortfolioPhotographyComponent', () => {
  let component: PortfolioPhotographyComponent;
  let fixture: ComponentFixture<PortfolioPhotographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioPhotographyComponent ]
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
