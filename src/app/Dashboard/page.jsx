'use client';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase/firebase';
import * as React from 'react';
import { useAuth } from '@/contexts/authContext';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import KeepCard from '@/component/KeepCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

async function getCards(currentUser) {
  const q = query(collection(db, 'recepie'), where('uid', '==', currentUser)); // Add query for user ID
  console.log(q);
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
const Dashboard = () => {
  const [cards, setCards] = React.useState([]);
  const { currentUser, userLoggedIn } = useAuth();
  if (!userLoggedIn) {
    window.location.href = '/';
    return;
  }
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCards = await getCards(currentUser.uid);
        setCards(fetchedCards);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 'xl',
        // marginLeft: '20px',
        // marginRight: '20px',
        padding: '10px',
      }}
    >
      <Masonry columns={4} spacing={2}>
        <KeepCard />
        {cards.map((card) => (
          <KeepCard card={card} />
        ))}
      </Masonry>
    </Box>
  );
};
export default Dashboard;
