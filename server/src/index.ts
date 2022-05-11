
import * as admin from 'firebase-admin';
import { APP_CONFIG } from './config';

admin.initializeApp({
    credential: admin.credential.cert(APP_CONFIG.FIREBASE)
})

import app from './api/api';

const server = app.listen(APP_CONFIG.PORT, () => {
    console.log(`EXPRESS APP LISTENING ON PORT ${APP_CONFIG.PORT}`)
})

export { app, server };