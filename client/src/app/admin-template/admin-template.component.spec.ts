import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTemplateComponent } from './admin-template.component';

describe('AdminTemplateComponent', () => {
  let component: AdminTemplateComponent;
  let fixture: ComponentFixture<AdminTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
