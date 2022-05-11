
import * as express from 'express';
import { Response } from '../models/response';
import { Helper } from '../../helper';


export class ApiController {
    constructor(
        public app = express.Router(),

    ) {

        app.post('/schedule', async (req, res) => {

            try {
                let request_data = req.body;
                const unix_start_new = Helper.getUnixDate(request_data.start);
                const unix_end_new = Helper.getUnixDate(request_data.end);
                const meetings = await Helper.getUsersMeetings(request_data.schedulingUser, request_data.scheduledUser)

                if (meetings.length && (meetings.filter(meeting =>
                    !((unix_start_new <= meeting.start && unix_end_new <= meeting.start)
                        || (unix_start_new >= meeting.start && unix_start_new >= meeting.end))
                ).length
                )) {
                    return res.json(new Response(false, "User already has a meeting in this time slot"))
                }
                await Helper.addNewMeeting(request_data.start, request_data.end, request_data.schedulingUser, request_data.scheduledUser);
                return res.json(new Response(true, "Meeting has been scheduled"));
            } catch (error) {
                return res.json(new Response(false, "Error occurred while creating meeting"))
            }
        });


        app.get('/meetings/:user_id/:username', async (req, res) => {

            try {
                const user_id = req.params.user_id.toString();
                const username = req.params.username.toLowerCase();

                const meetings_data = await Helper.meeting_ref.where('users', 'array-contains', { id: user_id, username }).get();
                const meetings = meetings_data.docs.map(snap => {
                    let data = snap.data()
                    return { id: snap.id, start: data.start.toDate(), end: data.end.toDate(), users: data.users }
                })
                return res.json(new Response(true, meetings))
            } catch (error) {
                return res.json(new Response(false, "Error occurred while fetching meeting"))
            }
        })

        app.delete('/delete/:meeting_id', async (req, res) => {
            try {
                const meeting_id = req.params.meeting_id.toString();
                const meetings_data = await Helper.meeting_ref.doc(meeting_id).delete()
                console.log(meetings_data)
                return res.json(new Response(true, meetings_data))
            } catch (error) {
                return res.json(new Response(false, "Error occurred while deleting meeting"))
            }

        })
    }
}

