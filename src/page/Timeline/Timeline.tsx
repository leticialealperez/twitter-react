import React from 'react';
import styled from 'styled-components';
import Form from '../../components/Form/Form';
import Tweet from '../../components/Tweet/Tweet';
import { ITweet, selecionaTodosTweets } from '../../store/modules/timeline/timelinesSlice';
import { useAppSelector } from '../../store/modules/typehook';


const TimelineStyled = styled.div``;
  

const Timeline: React.FC = () => {
  const todosTweets = useAppSelector(selecionaTodosTweets)

  return (
    <TimelineStyled>
      <Form />
      {todosTweets.map((tweet: ITweet) => (
        <Tweet key={tweet.id} id={tweet.id} name={tweet.name} imgUrl={tweet.imageUrl} username={tweet.usename} message={tweet.message}/>
      ))}
    </TimelineStyled>
  );
};

export default Timeline;
