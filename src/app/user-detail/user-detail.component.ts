import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogEditUserAddressComponent } from '../dialogs/dialog-edit-user-address/dialog-edit-user-address.component';
import { DialogEditUserNameComponent } from '../dialogs/dialog-edit-user-name/dialog-edit-user-name.component';
import { User } from '../models/user-class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.sass']
})
export class UserDetailComponent implements OnInit {
  userId: any = '';
  user: User = new User;
  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
      this.getUser();
    });
  }

  getUser() {
    this.firestore
      .collection('users')
      .doc(this.userId)
      .valueChanges()
      .subscribe((user: any) => {
        this.user = user;
        console.log(this.user)
      });
  };

  editUserName() {
    const dialog = this.dialog.open(DialogEditUserNameComponent);
    dialog.componentInstance.user = new User(this.user);
    dialog.componentInstance.userId = this.userId;
  }
  editUserAddress() {
    const dialog = this.dialog.open(DialogEditUserAddressComponent);
    dialog.componentInstance.user = new User(this.user);
    dialog.componentInstance.userId = this.userId;
  }
}
