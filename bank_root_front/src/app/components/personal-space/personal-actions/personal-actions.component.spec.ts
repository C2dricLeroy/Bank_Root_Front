import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalActionsComponent } from './personal-actions.component';

describe('PersonalActionsComponent', () => {
  let component: PersonalActionsComponent;
  let fixture: ComponentFixture<PersonalActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
