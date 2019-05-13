import * as functions from 'firebase-functions';

export const universal = functions.https.onRequest((request, response) => {
  require(`${process.cwd()}/dist/cosourcery-webpack/server`).app(
    request,
    response,
  );
});

// check https://github.com/jamesdaniels/AngularFireDocs and see how he's really using the env.PRERENDER and if he seems to have dpleoyed to firebase
