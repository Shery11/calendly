import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import swal from "sweetalert2";
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.API_URL;
  public selectedUser = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient,) { }

  sendSelectedUser(data: any): void {
    this.selectedUser.next(data);
  }
  getSelectedUser(): Observable<any> {
    return this.selectedUser.asObservable();
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  schedule_meeting(params) {
    let currentUser = this.getCurrentUser()
    console.log(currentUser);
    console.log(params);
    console.log({ schedulingUser: currentUser, scheduledUser: params.user, start: params.start, end: params.end })
    return this.http.post(`${this.apiUrl}/schedule`, { schedulingUser: currentUser, scheduledUser: params.user, start: params.start, end: params.end })
  }

  get_meetings(user?) {
    user = user ? user : this.getCurrentUser()
    return this.http.get(`${this.apiUrl}/meetings/${user.id}/${user.username}`).pipe(map(resp => {
      return resp['data'].map(meeting => {
        return { id: meeting.id, start: meeting.start, end: meeting.end, users: meeting.users.filter(meeting_user => meeting_user.id != user.id) }
      })
    }))
  }

  delete_meeting(meeting_id) {
    return this.http.delete(`${this.apiUrl}/delete/${meeting_id}`)
  }

  getUnixDate(date: Date) {
    return new Date(date).getTime()
  }

  showCustomAlertSuccess(message) {
    swal.fire("Success", message, "success");
  }
  showCustomAlertError(message) {
    swal.fire("Error", message, "error");
  }
}
