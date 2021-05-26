import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
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
  userId: string = '';
  constructor(public dialogRef: MatDialogRef<DialogEditUserAddressComponent>, private firestore: AngularFirestore) { }
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
  }
}
