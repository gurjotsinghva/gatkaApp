import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: true,
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