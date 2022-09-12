import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TadaComponent } from './tada.component';

describe('TadaComponent', () => {
  let component: TadaComponent;
  let fixture: ComponentFixture<TadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
