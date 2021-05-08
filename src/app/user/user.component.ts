import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { DialogAddUserComponent } from '../dialogs/dialog-add-user/dialog-add-user.component';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {



  constructor(public dialog: MatDialog) { }
  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  };
  ngOnInit(): void {
  }

}
