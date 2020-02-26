import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPtrabajoComponent } from './form-ptrabajo.component';

describe('FormPtrabajoComponent', () => {
  let component: FormPtrabajoComponent;
  let fixture: ComponentFixture<FormPtrabajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPtrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPtrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
