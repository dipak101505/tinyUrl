import React, { useState } from 'react';
import { storage } from '@/firebase/firebase';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

const UploadFile = ({ onImageClick, generateUniqueId }) => {
  // const [selectedFile, setSelectedFile] = useState(null);
  console.log(generateUniqueId);
  const handleChange = (event) => {
    // setSelectedFile(event.target.files[0]);
    const selectedFile = event.target.files[0];
    if (!selectedFile) return;

    const storageRef = ref(storage, `/uploads/${selectedFile.name}`);
    onImageClick(`/uploads/${selectedFile.name}`);
    try {
      //   await storageRef.put(selectedFile);
      uploadBytes(storageRef, selectedFile).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });
      // storageRef.getDownloadURL().then((url) => console.log(url));
      console.log('Upload successful!');
      // Optionally, clear the selected file state
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <div>
      <input id={generateUniqueId} type="file" onChange={handleChange} hidden />
    </div>
  );
};

export default UploadFile;
