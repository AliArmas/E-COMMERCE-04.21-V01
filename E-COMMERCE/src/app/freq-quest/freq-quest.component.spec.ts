import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreqQuestComponent } from './freq-quest.component';

describe('FreqQuestComponent', () => {
  let component: FreqQuestComponent;
  let fixture: ComponentFixture<FreqQuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreqQuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreqQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
