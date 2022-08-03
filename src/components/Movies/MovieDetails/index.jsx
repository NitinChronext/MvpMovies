import React from 'react';
import {
  Container,
  ImageWrapper,
  DetailWrapper,
  Title,
  Cast,
  Description,
  RatingWrapper,
} from './styles';
import { ENTER } from '../../../animations';

import { Rating } from 'react-native-ratings';

const MovieDetails = props => {
  const { movie } = props.route.params;
  return (
    <Container entering={ENTER.FadeInUp}>
      <ImageWrapper source={{ uri: movie?.backdrop }}></ImageWrapper>
      <RatingWrapper>
        <Rating
          ratingColor='#3498db'
          ratingCount={5}
          imageSize={30}
          startingValue={5}
          showRating
        ></Rating>
      </RatingWrapper>
      <DetailWrapper>
        <Title>{movie?.title}</Title>
        <Cast> {movie?.cast}</Cast>
        <Description> {movie?.overview}</Description>
      </DetailWrapper>
    </Container>
  );
};

export default React.memo(MovieDetails);
