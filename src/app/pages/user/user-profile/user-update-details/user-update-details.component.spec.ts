import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserUpdateDetailsComponent} from './user-update-details.component';

describe('UserUpdateDetailsComponent', () => {
  let component: UserUpdateDetailsComponent;
  let fixture: ComponentFixture<UserUpdateDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserUpdateDetailsComponent]
    });
    fixture = TestBed.createComponent(UserUpdateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
