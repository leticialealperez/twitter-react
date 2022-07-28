import React from 'react';
import img from '../../assets/image/image.png';
import VerifiedIcon from '@mui/icons-material/Verified';
import { IconButton } from '@mui/material';
import CropRotateIcon from '@mui/icons-material/CropRotate';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import UploadIcon from '@mui/icons-material/Upload';
import TweetStyled from './TweetStyled';

const Tweet: React.FC = () => {
  return (
    <TweetStyled>
      <div>
        <img src={img} alt='logo-twitter' />
      </div>
      <div>
        <div className='subtitulos'>
          <span className='nome-user'>
            Twitter Brasil <VerifiedIcon fontSize='small' />
          </span>
          <span className='login-data'>
            @TwitterBrasil &nbsp; • &nbsp; 20 de jul
          </span>
        </div>
        <div className='caixa-texto'>
          <p>
            As conversas sobre as #Eleiçoes2022 estão a todo vapor! Foram 44
            milhões de Tweets no 1º semestre sobre a corrida eleitoral
            brasileira Para que essa conversa seja segura e informada, o Twitter
            está reunindo esforços em diferentes frentes, e temos novidades para
            compartilhar
          </p>
        </div>
        <div className='buttons'>
          <IconButton
            color='primary'
            aria-label='comment picture'
            component='label'
            size='small'
          >
            <ChatBubbleOutlineIcon />
          </IconButton>
          <IconButton
            color='primary'
            aria-label='upload picture'
            component='label'
          >
            <CropRotateIcon />
          </IconButton>
          <IconButton
            color='primary'
            aria-label='upload picture'
            component='label'
          >
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton
            color='primary'
            aria-label='upload picture'
            component='label'
          >
            <UploadIcon />
          </IconButton>
        </div>
      </div>
    </TweetStyled>
  );
};

export default Tweet;
