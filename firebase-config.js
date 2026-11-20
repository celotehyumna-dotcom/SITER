
import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyATkV03GiAyCZoGWrgmoUx1t4vo-WwmWKk",
    authDomain: "siter-khusus.firebaseapp.com",
    projectId: "siter-khusus",
    storageBucket: "siter-khusus.firebasestorage.app",
    messagingSenderId: "129237115311",
    appId: "1:129237115311:web:a99b886287cfd8a6534f5a"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);


export { app, db, auth };
