import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBDwaNBaOWii5WI486HMwiZPT6omVGpSGM",
  authDomain: "restaurantapp-cf0d6.firebaseapp.com",
  databaseURL: "https://restaurantapp-cf0d6-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-cf0d6",
  storageBucket: "restaurantapp-cf0d6.appspot.com",
  messagingSenderId: "434792860589",
  appId: "1:434792860589:web:6490713625a7d7ba9fef24",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
