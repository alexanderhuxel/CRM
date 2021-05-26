import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'c:/Programmierung/Angular-Projekte/crm/src/app/models/user-class';

@Component({
  selector: 'app-dialog-edit-user-name',
  templateUrl: './dialog-edit-user-name.component.html',
  styleUrls: ['./dialog-edit-user-name.component.sass']
})
export class DialogEditUserNameComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogEditUserNameComponent>, private firestore: AngularFirestore) { }
  user: User | any;
  userId: string = '';
  loading: boolean = false;
  birthDate: Date | any;
  ngOnInit(): void {
  }

  saveUser() {
    this.loading = true;
    this.firestore
      .collection('users')
      .doc(this.userId)
      .update(this.user.toJSON())
      .then(() => {
        this.loading = false;
        this.dialogRef.close();
      })
  };
}
