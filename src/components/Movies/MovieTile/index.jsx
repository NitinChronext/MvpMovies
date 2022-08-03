import React from 'react';
import {
  Container,
  ImageWrapper,
  DetailWrapper,
  Title,
  HeartIconWrapper,
} from './styles';
import { ENTER } from '../../../animations';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SvgMapper from '../../../components/common/Icons/SvgMapper';
import { useMovieStore } from '../../../stores/useMoviesStore';

const MovieTile = ({ movie }) => {
  const navigation = useNavigation();
  const favMovies = useMovieStore(state => state.favMovies);
  const markAsFavorite = useMovieStore(state => state.markAsFavorite);
  const unmarkAsFavorite = useMovieStore(state => state.unmarkAsFavorite);

  const HeartIcon = SvgMapper['heart'];

  const onPress = () => {
    navigation.navigate('MovieDetails', { movie });
  };

  const pressFavorite = () => {
    if (favMovies.includes(movie.id)) {
      unmarkAsFavorite(movie.id);
    } else {
      markAsFavorite(movie.id);
    }
  };

  return (
    <Container entering={ENTER.FadeInUp}>
      <Pressable onPress={onPress}>
        <ImageWrapper source={{ uri: movie?.backdrop }}></ImageWrapper>
        <DetailWrapper>
          <Title>{movie.title}</Title>
        </DetailWrapper>
      </Pressable>
      <HeartIconWrapper onPress={pressFavorite}>
        <HeartIcon isActive={favMovies.includes(movie.id)}></HeartIcon>
      </HeartIconWrapper>
    </Container>
  );
};

export default React.memo(MovieTile);
