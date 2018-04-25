// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  fireBaseConfig: {
    apiKey: 'AIzaSyDeJXKSIRHhCM5og6Zc77Py96GAXzJSh3Y',
    authDomain: 'test-bfceb.firebaseapp.com',
    databaseURL: 'https://test-bfceb.firebaseio.com',
    projectId: 'test-bfceb',
    storageBucket: 'test-bfceb.appspot.com',
    messagingSenderId: '169224143007'
  }
};
