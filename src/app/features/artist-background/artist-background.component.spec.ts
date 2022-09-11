import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistBackgroundComponent } from './artist-background.component';

describe('ArtistBackgroundComponent', () => {
  let component: ArtistBackgroundComponent;
  let fixture: ComponentFixture<ArtistBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
