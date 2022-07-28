import React from 'react';
import styled from 'styled-components';
import Tweet from '../Tweet/Tweet';

const TimelineStyled = styled.div``;

const Timeline: React.FC = () => {
  return (
    <TimelineStyled>
      <Tweet />
      <Tweet />
      <Tweet />
    </TimelineStyled>
  );
};

export default Timeline;
