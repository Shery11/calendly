import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import users from '../../mock_data/user.json'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users = users
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.users)
  }

  login(user) {
    localStorage.setItem("user", JSON.stringify(user));
    this.router.navigateByUrl('meetings')
  }

}
