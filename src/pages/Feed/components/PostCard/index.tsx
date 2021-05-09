import React from 'react';

import {
  CardMessage,
  Author,
  Message,
  TimeView,
  ClockIcon,
  IntervalTime,
} from './styles';

const PostCard = (): JSX.Element => (
  <CardMessage style={{ elevation: 3 }}>
    <Author>Pedro</Author>
    <Message>
      Why Big Data Needs Thick Data?Why Big Data Needs Thick Data?Why Big Data
      Needs Thick Data?Why Big Data Needs Thick Data?Why Big Data Needs Thick
      Data?Why Big Data Needs Thick Data?Why Big Data Needs Thick Data?
    </Message>
    <TimeView>
      <ClockIcon />
      <IntervalTime>1 hr atrás</IntervalTime>
    </TimeView>
  </CardMessage>
);

export default PostCard;
