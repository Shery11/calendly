import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clendly';

  constructor(private api: ApiService, private router: Router) {

  }
  openMeetings() {
    this.api.sendSelectedUser(null);
    this.router.navigateByUrl('/meetings')
  }
}
