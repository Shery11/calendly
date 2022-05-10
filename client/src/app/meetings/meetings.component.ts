import { Component, Input, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {

  @Input() showDelete = true;
  meetingSubscription$;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.meetingSubscription$ = this.api.getSelectedUser().pipe(switchMap((user) => this.api.get_meetings(user)));
  }

  delete(meeting_id) {
    this.api.delete_meeting(meeting_id).subscribe((resp: any) => {
      if (resp.success)
        this.api.sendSelectedUser(null);
      else this.api.showCustomAlertError("Unable to delete")
    })
  }

}
