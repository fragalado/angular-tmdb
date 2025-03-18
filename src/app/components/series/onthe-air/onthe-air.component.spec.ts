import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OntheAirComponent } from './onthe-air.component';

describe('OntheAirComponent', () => {
  let component: OntheAirComponent;
  let fixture: ComponentFixture<OntheAirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OntheAirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OntheAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
