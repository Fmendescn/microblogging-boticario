/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { editIcon, trashIcon } from '../../shared/images';
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
  Footer,
  PostActions,
  ActionButton,
  IconAction,
} from './styles';

interface PostCardProps extends TouchableOpacityProps {
  author: string;
  message: string;
  date: string;
  id?: string;
  coverImage?: string;
  deletePost?: () => void;
  readPost?: () => void;
}
const userId = '100';
const PostCard = ({
  id,
  author,
  message,
  date,
  coverImage,
  deletePost,
  readPost,
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
          <Footer>
            <TimeView>
              <ClockIcon />
              <IntervalTime>{getDifferenceBetweenDates(date)}</IntervalTime>
            </TimeView>
            {id === userId ? (
              <PostActions>
                <ActionButton onPress={readPost}>
                  <IconAction source={editIcon} />
                </ActionButton>
                <ActionButton onPress={deletePost}>
                  <IconAction source={trashIcon} />
                </ActionButton>
              </PostActions>
            ) : undefined}
          </Footer>
        </ViewInformation>
      </ViewCard>
    </CardMessage>
  );
};

PostCard.defaultProps = {
  coverImage: undefined,
  deletePost: () => undefined,
  readPost: () => undefined,
  id: null,
};

export default PostCard;
