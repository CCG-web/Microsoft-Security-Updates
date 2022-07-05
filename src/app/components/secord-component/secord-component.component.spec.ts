import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecordComponentComponent } from './secord-component.component';

describe('SecordComponentComponent', () => {
  let component: SecordComponentComponent;
  let fixture: ComponentFixture<SecordComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecordComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecordComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
