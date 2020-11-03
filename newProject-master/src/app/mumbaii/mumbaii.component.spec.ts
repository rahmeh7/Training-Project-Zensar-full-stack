import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MumbaiiComponent } from './mumbaii.component';

describe('MumbaiiComponent', () => {
  let component: MumbaiiComponent;
  let fixture: ComponentFixture<MumbaiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MumbaiiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MumbaiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
