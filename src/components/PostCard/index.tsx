import React from 'react';

import { getDifferenceBetweenDates } from '../../shared/utils';

import {
  CardMessage,
  ViewCard,
  Author,
  Message,
  TimeView,
  ClockIcon,
  IntervalTime,
  ViewInformation,
  CoverImage,
} from './styles';

interface PostCardProps {
  author: string;
  message: string;
  date: string;
  coverImage?: string;
}

const PostCard = ({
  author,
  message,
  date,
  coverImage,
}: PostCardProps): JSX.Element => {
  return (
    <CardMessage style={{ elevation: 3 }}>
      <ViewCard>
        {coverImage && (
          <CoverImage
            source={{
              uri: coverImage,
            }}
          />
        )}
        <ViewInformation>
          <Author>{author}</Author>
          <Message>{message}</Message>
          <TimeView>
            <ClockIcon />
            <IntervalTime>{getDifferenceBetweenDates(date)}</IntervalTime>
          </TimeView>
        </ViewInformation>
      </ViewCard>
    </CardMessage>
  );
};

PostCard.defaultProps = {
  coverImage: undefined,
};

export default PostCard;
