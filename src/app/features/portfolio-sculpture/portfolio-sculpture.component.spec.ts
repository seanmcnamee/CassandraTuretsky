import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSculptureComponent } from './portfolio-sculpture.component';

describe('PortfolioSculptureComponent', () => {
  let component: PortfolioSculptureComponent;
  let fixture: ComponentFixture<PortfolioSculptureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioSculptureComponent ]
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
