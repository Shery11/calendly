import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ScheduleMeetingComponent } from './schedule-meeting/schedule-meeting.component';
import { MeetingsComponent } from './meetings/meetings.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'schedule', component: ScheduleMeetingComponent },
  { path: 'meetings', component: MeetingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
