'use client';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase/firebase';
import MapUrl from '@/component/MapUrl';

const hash = ({ params }) => {
  console.log(params.hash);
  const docRef = doc(db, 'urlMapping', params.hash);
  getDoc(docRef)
    .then((docSnapshot) => {
      if (docSnapshot.exists) {
        updateDoc(docRef, {
          count: docSnapshot.data().count + 1,
        });
        window.open(docSnapshot.data().url);
        return <div>redirect</div>;
      } else {
        console.log('No such document!');
        return <MapUrl />;
      }
    })
    .catch((error) => {
      console.error('Error getting document:', error);
      return <MapUrl></MapUrl>;
    });

  //   window.open('https://google.com', '_blank');
  return <MapUrl></MapUrl>;
};
export default hash;
