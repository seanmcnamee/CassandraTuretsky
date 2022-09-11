import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPrintmakingComponent } from './portfolio-printmaking.component';

describe('PortfolioPrintmakingComponent', () => {
  let component: PortfolioPrintmakingComponent;
  let fixture: ComponentFixture<PortfolioPrintmakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioPrintmakingComponent ]
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
