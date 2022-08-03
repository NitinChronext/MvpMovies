import React from 'react';
import { FlatList } from 'react-native';
import MovieTile from '../MovieTile';
import { FlatListWrapper } from './styles';
import { ENTER } from '../../../animations';

const MovieList = ({ movies }) => {
  const _renderItem = ({ item }) => {
    return <MovieTile movie={item} />;
  };
  const keyExtractor = (item, index) => index.toString() + item.key;
  return (
    <FlatListWrapper entering={ENTER.FadeInUp}>
      <FlatList
        horizontal={true}
        data={movies}
        renderItem={_renderItem}
        keyExtractor={keyExtractor}
        scrollIndicatorInsets={{ right: 1 }}
        maxToRenderPerBatch={4}
      ></FlatList>
    </FlatListWrapper>
  );
};

export default React.memo(MovieList);
