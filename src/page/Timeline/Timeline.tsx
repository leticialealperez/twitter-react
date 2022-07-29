import React from 'react';
import styled from 'styled-components';
import Form from '../../components/Form/Form';
import Tweet from '../../components/Tweet/Tweet';


const TimelineStyled = styled.div``;

const Timeline: React.FC = () => {
  return (
    <TimelineStyled>
      <Form />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </TimelineStyled>
  );
};

export default Timeline;
