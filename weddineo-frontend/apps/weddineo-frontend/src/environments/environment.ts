// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost:8080/',
  defaultLang: 'pl_Pl',
  firebaseConfig: {
    apiKey: 'AIzaSyDdZRR9Zk3pmpJC32S7cdJ7_aA92ezAxQ0',
    authDomain: 'weddineo-236fc.firebaseapp.com',
    databaseURL: 'https://weddineo-236fc.firebaseio.com',
    projectId: 'weddineo-236fc',
    storageBucket: 'weddineo-236fc.appspot.com',
    messagingSenderId: '215698169826',
    appId: '1:215698169826:web:09f8a110834a5af7f363bb',
    measurementId: 'G-C2FYCBYFB1',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
