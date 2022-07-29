import React from 'react';
import TweetStyled from './TweetStyled';
import VerifiedIcon from '@mui/icons-material/Verified';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';
import {deletarTweet} from '../../store/modules/timeline/timelinesSlice'
import { useAppDispatch } from '../../store/modules/typehook';

export interface TweetProps {
  id: string;
  name: string;
  imgUrl: string;
  username: string;
  message: string;
}

const Tweet: React.FC<TweetProps> = ({ id, name, imgUrl, message, username }) => {
  
  const dispatch = useAppDispatch()

  const deleteTweet = (id: string) => {
    dispatch(deletarTweet(id))
  }

  return (
    <TweetStyled>
      <div className="tweet-container">
        <div>
          <div className="avatar">
            <img alt="" src={imgUrl} />
          </div>
          <div className="tweet-body">
            <div>
              <p className="tweet-title">
                {name}
                <span>
                  <VerifiedIcon fontSize='small' sx={{ marginBottom: '-5px', marginLeft: '2px'}}/>
                </span> 
                <span>
                  &nbsp; {username} &nbsp;
                </span>
                <span>
                  •&nbsp; 28 Jul
                </span>
              </p>
              <p className="text-tweet">{message}</p>
            </div>
          </div>
          <IconButton color='primary' onClick={() => deleteTweet(id)}>
            <DeleteOutlineIcon />
          </IconButton>
        </div>
      </div>
    </TweetStyled>
  );
};

export default Tweet;
