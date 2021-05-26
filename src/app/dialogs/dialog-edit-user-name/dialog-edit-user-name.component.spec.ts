import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { DialogEditUserNameComponent } from './dialog-edit-user-name.component';

describe('DialogEditUserNameComponent', () => {
  let component: DialogEditUserNameComponent;
  let fixture: ComponentFixture<DialogEditUserNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogEditUserNameComponent],
      imports: [MatDialogModule],
      providers: [
        {
          provide: MatDialogRef,
          usevalue: {}
        }
      ]

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditUserNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
