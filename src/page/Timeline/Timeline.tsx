import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Form from '../../components/Form/Form';
import Tweet from '../../components/Tweet/Tweet';
import { buscarTodos, ITweet, selecionaTodosTweets } from '../../store/modules/timeline/timelinesSlice';
import { useAppSelector, useAppDispatch } from '../../store/modules/typehook';


const TimelineStyled = styled.div``;
  

const Timeline: React.FC = () => {
  const [tweets, setTweets] = useState<ITweet[]>([]);
  const dispatch = useAppDispatch()
  const todosTweets = useAppSelector(selecionaTodosTweets)

  useEffect(() => {
    dispatch(buscarTodos())
  }, [tweets])

  useEffect(() => {
    console.log("atualizou")
    setTweets(todosTweets)
  }, [todosTweets])
  

  return (
    <TimelineStyled>
      <Form />
      {tweets.map((tweet: ITweet) => (
        <Tweet key={tweet.id} id={`${tweet.id}`} name={tweet.name} imgUrl={tweet.imageUrl} username={tweet.username} message={tweet.message}/>
      ))}
    </TimelineStyled>
  );
};

export default Timeline;
