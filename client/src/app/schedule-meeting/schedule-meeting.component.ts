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

  constructor(public formBuilder: FormBuilder, private api: ApiService) { }
  public users = users

  ngOnInit(): void {
    console.log(this.minStartDate);
    this.scheduleForm = this.formBuilder.group({
      user: new FormControl(null, Validators.required),
      start: new FormControl(null, Validators.required),
      end: new FormControl(null, Validators.required)
    });
    this.subscribeToFormControlChanges();
  }

  onSchedule(values) {
    this.api.schedule_meeting(values).subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        this.api.sendSelectedUser(this.scheduleForm.get("user").value);
      }
    })
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
