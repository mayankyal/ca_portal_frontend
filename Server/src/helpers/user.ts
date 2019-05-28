import User = require('../models/user');

export function upsertUser (accessToken: any, refreshToken: any, profile: any, done: any) {
    try {
        User.findOne({
            fbUserId: profile.id
        }).then( user => {
            if (user) {
                done(null, user);
            }
            else {
                const newUser = {
                    fbUserId: profile.id,
                    fbToken: accessToken,
                    name: profile.name.givenName + " " + profile.name.familyName,
                    email: profile.emails[0].value,
                    refCode: (Math.random() + 0.00000001).toString(36).substring(2, 10)
                }
                new User(newUser).save().then(user => done(null, user));
            }
        });
    }
    catch (error) {
        console.log("Auth Error:", error);
        done(null, false);
    }
}