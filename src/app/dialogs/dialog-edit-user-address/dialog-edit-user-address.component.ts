import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/models/user-class';

@Component({
  selector: 'app-dialog-edit-user-address',
  templateUrl: './dialog-edit-user-address.component.html',
  styleUrls: ['./dialog-edit-user-address.component.sass']
})
export class DialogEditUserAddressComponent implements OnInit {
  loading: boolean = false;
  user: User | any;
  constructor(public dialogRef: MatDialogRef<DialogEditUserAddressComponent>) { }
  ngOnInit(): void {
  }


  saveUser() { }
}
