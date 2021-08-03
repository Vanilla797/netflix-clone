import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyCAWEsbKwDYIzJZPCddBoCwbKtrIiK3Ugo',
  authDomain: 'netflix-project-f1fa4.firebaseapp.com',
  projectId: 'netflix-project-f1fa4',
  storageBucket: 'netflix-project-f1fa4.appspot.com',
  messagingSenderId: '1064036100636',
  appId: '1:1064036100636:web:e7cf8dd30cec7caa40cdd9',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
