// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBtLujUdKoq1zGb20LSZXG5ogPVqMfhhzg",
  authDomain: "gomka-bc223.firebaseapp.com",
  databaseURL: "https://gomka-bc223-default-rtdb.firebaseio.com",
  projectId: "gomka-bc223",
  storageBucket: "gomka-bc223.firebasestorage.app",
  messagingSenderId: "355944182113",
  appId: "1:355944182113:web:3606605581e4c52239d520",
  measurementId: "G-LQ7NKNRJRB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

const CLOUDINARY_CLOUD_NAME = 'dk9xej3cf';
const CLOUDINARY_UPLOAD_PRESET = 'k30_mk';

export { auth, database, CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET };
