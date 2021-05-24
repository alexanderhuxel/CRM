import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserComponent } from 'src/app/user/user.component';
import { User } from 'c:/Programmierung/Angular-Projekte/crm/src/app/models/user-class';

@Component({
  selector: 'app-dialog-edit-user-name',
  templateUrl: './dialog-edit-user-name.component.html',
  styleUrls: ['./dialog-edit-user-name.component.sass']
})
export class DialogEditUserNameComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogEditUserNameComponent>) { }
  user: User | any;
  loading: boolean = false;
  birthDate: Date | any;
  ngOnInit(): void {
  }

  saveUser() { };
}
