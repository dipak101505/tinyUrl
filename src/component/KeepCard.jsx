import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CancelIcon from '@mui/icons-material/Cancel';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { db } from '@/firebase/firebase';
import { collection, setDoc, doc, deleteDoc } from 'firebase/firestore';
import { useAuth } from '@/contexts/authContext';
import { TextField } from '@mui/material';
import UploadFile from './UploadFile';
import { TextareaAutosize } from '@mui/base';
import { storage } from '@/firebase/firebase';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const generateUniqueId = () =>
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15);

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [body, setBody] = React.useState(props.card?.body || ''); // Set empty string as default
  const [title, setTitle] = React.useState(props.card?.title || '');
  const [description, setDescription] = React.useState(
    props.card?.description || ''
  );
  const [image, setImage] = React.useState(props.card?.image || '');
  const id = props.card?.id;
  const { currentUser, userLoggedIn } = useAuth();
  // Toggle between textarea and typograph
  const [textAreaBody, setTextAreaBody] = React.useState(false);
  const [textAreaTitle, setTextAreaTitle] = React.useState(false);
  const [textAreaDescription, setTextAreaDescription] = React.useState(false);
  const [textAreaId, setTextAreaId] = React.useState(generateUniqueId());
  console.log(body, title, description, image);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleTextAreaBody = () => {
    setTextAreaBody(true);
  };
  const handleTextAreaTitle = () => {
    setTextAreaTitle(true);
  };
  const handleTextAreaDescription = () => {
    setTextAreaDescription(true);
  };
  const handleTextAreaImage = (data) => {
    console.log(data);
    getDownloadURL(ref(storage, data)).then((url) => {
      setImage(url);
    });
  };

  async function deleteEntry() {
    if (id) {
      const reference = doc(db, 'recepie', id);
      await deleteDoc(reference);
      console.log('Entry deleted successfully!');
    }
    window.location.href = '/Dashboard';
  }

  async function handleSave() {
    const values = {
      body: body,
      title: title,
      description: description,
      image: image,
      uid: currentUser.uid,
    };

    const reference = id
      ? doc(db, 'recepie', id)
      : doc(collection(db, 'recepie')); // Conditional reference creation
    await setDoc(reference, values); // Set data without merging (for creating new documents)

    console.log('Entry saved successfully!');
    handleCancel();
  }

  const handleCancel = () => {
    //revert to previous state
    setTextAreaBody(false);
    setTextAreaDescription(false);
    setTextAreaTitle(false);
  };

  console.log(textAreaId);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        // avatar={
        // //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        // //     D
        // //   </Avatar>
        // }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          textAreaTitle ? (
            <TextareaAutosize
              //   placeholder={title ? title : ''}
              value={title ? title : ''}
              onChange={handleTitleChange}
              style={{ width: '100%' }}
            />
          ) : (
            <div onClick={handleTextAreaTitle}>
              {title ? title : 'Title goes here'}
            </div>
          )
        }
        subheader="Add Date || Sub header"
      />
      <div>
        <CardMedia
          component="img"
          height="194"
          onClick={() => document.getElementById(textAreaId).click()}
          image={
            image
              ? image
              : 'https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_960_720.png'
          }
          alt="Add Image"
        />
        <UploadFile
          onImageClick={handleTextAreaImage}
          generateUniqueId={textAreaId}
        />
      </div>
      <CardContent>
        {textAreaBody ? (
          <TextareaAutosize
            //   placeholder={title ? title : ''}
            value={body ? body : ''}
            onChange={handleBodyChange}
            style={{ width: '100%' }}
          />
        ) : (
          <div onClick={handleTextAreaBody}>
            <Typography variant="body2" color="text.secondary">
              {body ? body : 'Body goes here'}
            </Typography>
          </div>
        )}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="save">
          <div onClick={handleSave}>
            <FileDownloadDoneIcon />
          </div>
        </IconButton>
        <IconButton aria-label="cancel">
          <div onClick={handleCancel}>
            <CancelIcon />
          </div>
        </IconButton>
        <IconButton aria-label="delete">
          <div onClick={deleteEntry}>
            <DeleteForeverSharpIcon />
          </div>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {textAreaDescription ? (
            <TextareaAutosize
              value={description ? description : ''}
              onChange={handleDescriptionChange}
              style={{ width: '100%' }}
            />
          ) : (
            <div onClick={handleTextAreaDescription}>
              <Typography paragraph>
                {description ? description : 'description goes here'}
              </Typography>
            </div>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
}
