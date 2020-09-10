
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBaFreQ0HGGt7ZpdeoB5CCSFhSvjSnsT2U",
  authDomain: "residual-project.firebaseapp.com",
  databaseURL: "https://residual-project.firebaseio.com",
  projectId: "residual-project",
  storageBucket: "residual-project.appspot.com",
  messagingSenderId: "191334878878",
  appId: "1:191334878878:web:efe833e8ac26455789758f"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const firebaseIP = firebase.initializeApp(firebaseConfig);

  
  export default firebaseIP;
