import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user-class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.sass']
})
export class DialogAddUserComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  saveUser() {

  }
  user = new User();

}
