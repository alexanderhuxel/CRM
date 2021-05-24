import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog'
import { DialogAddUserComponent } from '../dialogs/dialog-add-user/dialog-add-user.component';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  allUsers: any = [];

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }
  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  };
  ngOnInit(): void {
    this.firestore
      .collection('users')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((changes: any) => {
        this.allUsers = changes;
        console.table(changes)
      })
  }

}


