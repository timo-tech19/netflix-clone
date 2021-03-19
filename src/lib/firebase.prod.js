import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// config
const config = {
    apiKey: 'AIzaSyC7CLG4aGzfHQ7wvDlRZrWs7GX98eNY5_k',
    authDomain: 'netflix-clone-d9874.firebaseapp.com',
    projectId: 'netflix-clone-d9874',
    storageBucket: 'netflix-clone-d9874.appspot.com',
    messagingSenderId: '215792994360',
    appId: '1:215792994360:web:9757ddc435388bfe85fecd',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
