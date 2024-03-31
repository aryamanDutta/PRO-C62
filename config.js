import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyA64_D_JnwZPhE-1-C6kn2eMveBnux0aOM",
  authDomain: "school-attendance-app-64f2a.firebaseapp.com",
  databaseURL: "https://school-attendance-app-64f2a-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-64f2a",
  storageBucket: "school-attendance-app-64f2a.appspot.com",
  messagingSenderId: "133080252297",
  appId: "1:133080252297:web:462a20791cc2577b802b58"
};
//initialize your database
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database()