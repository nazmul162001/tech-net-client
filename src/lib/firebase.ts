import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// const firebaseConfig = {
//   apiKey: 'AIzaSyB5PEMN6YKjyT4jVpz7v4sGTTdhSaUZ5E4',
//   authDomain: 'technet-766e6.firebaseapp.com',
//   projectId: 'technet-766e6',
//   storageBucket: 'technet-766e6.appspot.com',
//   messagingSenderId: '522858001993',
//   appId: '1:522858001993:web:beeba8bb94ee07e9b3f198',
// };



const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
