import React from 'react';
import styled from 'styled-components';
import Form from '../Form/Form';
import Tweet from '../Tweet/Tweet';

const TimelineStyled = styled.div``;

const Timeline: React.FC = () => {
  return (
    <TimelineStyled>
      <Form />
      <Tweet />
      <Tweet />
      <Tweet />
    </TimelineStyled>
  );
};

export default Timeline;
