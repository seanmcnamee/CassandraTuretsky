import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioResultsComponent } from './portfolio-results.component';

describe('PortfolioResultsComponent', () => {
  let component: PortfolioResultsComponent;
  let fixture: ComponentFixture<PortfolioResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
