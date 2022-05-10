import * as admin from 'firebase-admin';

export class Helper {
    static firestore_ref = admin.firestore()
    static meeting_ref = Helper.firestore_ref.collection("meetings");

    static getUnixDate(date: Date) {
        return new Date(date).getTime()
    }

    static validateRequest(req: any, next: any, schema: any): void {
        const options = {
            abortEarly: false, // include all errors
            allowUnknown: true, // ignore unknown props
            stripUnknown: true // remove unknown props
        };
        const { error, value } = schema.validate(req.body, options);
        if (error) {
            next(`Validation error: ${error.details.map((x: any) => x.message).join(', ')}`);
        } else {
            req.body = value;
            next();
        }
    }
    // static newlyAddedToArray(p: {
    //     newArray: string[];
    //     oldArray: string[];
    //     description: string;
    // }) {
    //     const newlyAdded = p.newArray.filter((key) => !p.oldArray.includes(key));

    //     if (newlyAdded.length === 0) return null;

    //     if (newlyAdded.length > 1)
    //         functions.logger.warn(
    //             `${newlyAdded.length} entries added to: ${p.description}. Only first one will be processed. Newly added: ${newlyAdded}`
    //         );

    //     return newlyAdded[0];
    // }

    // newlyRemovedFromArray(p: {
    //     newArray: string[];
    //     oldArray: string[];
    //     description: string;
    // }) {
    //     const newlyRemoved = p.oldArray.filter((key) => !p.newArray.includes(key));

    //     if (newlyRemoved.length === 0) return null;

    //     if (newlyRemoved.length > 1)
    //         functions.logger.warn(
    //             `${newlyRemoved.length} entries removed from: ${p.description}. Only first one will be processed. Newly removed: ${newlyRemoved}`
    //         );

    //     return newlyRemoved[0];
    // }
}