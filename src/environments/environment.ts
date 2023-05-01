// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyDFYBnlD7nOvIbmZsdb00HZVEsDhWFhRlk",
    authDomain: "gatkaapp.firebaseapp.com",
    projectId: "gatkaapp",
    storageBucket: "gatkaapp.appspot.com",
    messagingSenderId: "942424535756",
    appId: "1:942424535756:web:c013abaff31fcf9c56c869",
    measurementId: "G-SHTLDQ04SW"
  }
};

const app = initializeApp(environment.firebase);
const analytics = getAnalytics(app);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
