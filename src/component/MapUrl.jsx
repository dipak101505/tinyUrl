'use client';
import * as React from 'react';
import { Box, ThemeProvider, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { useState } from 'react';
import crc32 from 'crc/crc32';
import { collection, addDoc, setDoc, doc } from 'firebase/firestore';
import { db } from '@/firebase/firebase';

export default function MapUrl() {
  const [inputValue, setInputValue] = useState('');
  const [aliasValue, setAliasValue] = useState('');
  const topDomain = [{ label: 'https://tiny-url.web.app', year: 1994 }];
  const validateUrl = () => true;
  const handleClick = () => {
    if (validateUrl) {
      try {
        const docRef = setDoc(
          doc(
            db,
            'urlMapping',
            aliasValue != '' ? aliasValue : crc32(inputValue).toString(16)
          ),
          {
            url: inputValue,
            count: 0,
          }
        );
        console.log(
          'https://tiny-url.web.app/' +
            (aliasValue != '' ? aliasValue : crc32(inputValue).toString(16))
        );
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    }
  };
  return (
    <Box
      sx={{
        width: 450,
        height: 250,
        borderRadius: 1,
        marginLeft: 10,
        marginTop: 10,
        bgcolor: '#f3f6f4',
      }}
    >
      <Typography
        sx={{
          marginLeft: 2,
          marginTop: 1,
        }}
      >
        <InsertLinkIcon color="primary" sx={{ marginRight: 1 }} />
        Shorten a long URL
      </Typography>
      <TextField
        id="outlined-size-small"
        label="Enter long link here"
        size="small"
        sx={{ width: 418, marginLeft: 2, marginTop: 1 }}
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />

      <Typography
        sx={{
          marginLeft: 2,
          marginTop: 1,
        }}
      >
        <AutoFixHighIcon color="primary" sx={{ marginRight: 1 }} />
        Customize your link
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={topDomain}
          sx={{ width: 250, marginLeft: 0, marginTop: 1 }}
          renderInput={(params) => (
            <TextField {...params} label="Choose Domain" size="small" />
          )}
        />

        <TextField
          id="outlined-size-small"
          label="Enter alias"
          size="small"
          sx={{ width: 150, marginLeft: 2, marginTop: 1 }}
          value={aliasValue}
          onChange={(event) => {
            setAliasValue(event.target.value);
          }}
        />
      </div>
      <Button
        sx={{ width: 420, marginTop: 3, marginLeft: 2 }}
        variant="contained"
        onClick={handleClick}
      >
        Shorten Url
      </Button>
    </Box>
  );
}
