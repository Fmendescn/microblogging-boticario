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
}: PostCardProps): JSX.Element => (
  <CardMessage style={{ elevation: 3 }}>
    <ViewCard>
      {coverImage && (
        <CoverImage
          source={{
            uri:
              coverImage ??
              'https://images.unsplash.com/photo-1603993097397-89c963e325c7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
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

PostCard.defaultProps = {
  coverImage: undefined,
};

export default PostCard;
