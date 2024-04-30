import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDXef3y3j0J63NdHhxdn1mo-EneEal3DQE',
  authDomain: 'task-manager-memo.firebaseapp.com',
  databaseURL: 'https://cloud-profiler-demo-399610-default-rtdb.firebaseio.com',
  projectId: 'cloud-profiler-demo-399610',
  storageBucket: 'cloud-profiler-demo-399610.appspot.com',
  messagingSenderId: '572657056042',
  appId: '1:572657056042:web:90557b7f626ab37492c653',
  measurementId: 'G-CQKQD1781T',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);
const storage = getStorage(app, 'gs://cloud-profiler-demo-399610.appspot.com');

export { app, auth, db, storage };
