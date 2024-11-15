import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxMonitorComponent } from './box-monitor.component';

describe('BoxMonitorComponent', () => {
  let component: BoxMonitorComponent;
  let fixture: ComponentFixture<BoxMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxMonitorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
