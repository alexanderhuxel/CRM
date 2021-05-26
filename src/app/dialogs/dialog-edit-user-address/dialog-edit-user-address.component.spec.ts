import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { DialogEditUserAddressComponent } from './dialog-edit-user-address.component';

describe('DialogEditUserAddressComponent', () => {
  let component: DialogEditUserAddressComponent;
  let fixture: ComponentFixture<DialogEditUserAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogEditUserAddressComponent],
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
    fixture = TestBed.createComponent(DialogEditUserAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
