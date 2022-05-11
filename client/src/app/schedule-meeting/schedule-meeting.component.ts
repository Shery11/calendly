import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import users from '../../mock_data/user.json'
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-schedule-meeting',
  templateUrl: './schedule-meeting.component.html',
  styleUrls: ['./schedule-meeting.component.scss']
})
export class ScheduleMeetingComponent implements OnInit {
  public scheduleForm: FormGroup;
  public minStartDate = new Date().toISOString().substring(0, 16)
  public minEndDate = this.minStartDate;
  public users = users
  public currentUser = this.api.getCurrentUser();

  constructor(public formBuilder: FormBuilder, private api: ApiService) { }


  ngOnInit(): void {
    this.scheduleForm = this.formBuilder.group({
      user: new FormControl(null, Validators.required),
      start: new FormControl(null, Validators.required),
      end: new FormControl(null, Validators.required)
    });
    this.subscribeToFormControlChanges();

  }

  onSchedule(values) {
    if (this.api.getUnixDate(values.start) < this.api.getUnixDate(values.end)) {
      this.api.schedule_meeting(values).subscribe((res: any) => {
        console.log(res);
        if (res.success) {
          this.api.sendSelectedUser(this.scheduleForm.get("user").value);
          this.scheduleForm.reset();
          return this.api.showCustomAlertSuccess("Meeting Scheduled")

        }
        return this.api.showCustomAlertError("Already booked, Please select different slot")

      })
    } else {
      this.api.showCustomAlertError("Invalid Date/Time selection")
    }
  }

  subscribeToFormControlChanges() {

    this.scheduleForm.get("user").valueChanges.subscribe(user => {
      this.api.sendSelectedUser(user);
    })

    this.scheduleForm.get("start").valueChanges.subscribe(start => {
      this.minEndDate = start
    })
  }




}
