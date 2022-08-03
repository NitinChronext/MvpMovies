import React from 'react';
import { Container, ImageWrapper, DetailWrapper, Title } from './styles';
import { ENTER } from '../../../animations';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MovieTile = ({ movie }) => {
  const navigation = useNavigation();
  // console.log(movie);

  const onPress = () => {
    navigation.navigate('MovieDetails', { movie });
  };

  return (
    <Container entering={ENTER.FadeInUp}>
      <Pressable onPress={onPress}>
        <ImageWrapper source={{ uri: movie?.backdrop }}></ImageWrapper>
        <DetailWrapper>
          <Title>{movie.title}</Title>
        </DetailWrapper>
      </Pressable>
    </Container>
  );
};

export default React.memo(MovieTile);
