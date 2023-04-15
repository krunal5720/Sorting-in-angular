import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeShortComponent } from './merge-short.component';

describe('MergeShortComponent', () => {
  let component: MergeShortComponent;
  let fixture: ComponentFixture<MergeShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeShortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MergeShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
