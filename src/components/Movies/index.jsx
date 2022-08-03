import React, { useState } from 'react';
import { useSearchMovie, useFetchMovies } from '../../hooks/useFetchMovies';
import MovieList from './MovieList';
import {
  Container,
  MessageWrapper,
  SectionListWrapper,
  SectionTitle,
  SectionTitleWrapper,
} from './styles';
import SearchBar from '../SearchBar';
import { useMovieStore } from '../../stores/useMoviesStore';

const getDataSource = data => {
  var dataSource = [];
  data &&
    Object.keys(data).map(key => {
      dataSource.push({ title: key, data: data[key] });
    });

  return dataSource;
};

const Movies = () => {
  const markAsFavorite = useMovieStore(state => state.markAsFavorite);

  const [searchTerm, setSearchTerm] = useState(null);
  const { data, error, isError, isFetching, isLoading } = useFetchMovies();
  const {
    data: searchData,
    error: searchError,
    isError: isSearchError,
    isFetching: isSearchFetching,
    isLoading: isSearchLoading,
  } = useSearchMovie(searchTerm);

  const onChangeText = text => {
    if (!text || text.length === 0) {
      return;
    } else {
      setSearchTerm(text);
    }
  };

  const onClearInput = () => {
    setSearchTerm('');
  };

  var dataSource = getDataSource(
    (searchTerm && searchData) || (!searchTerm && data) || [],
  );

  if (isLoading || isFetching || isSearchLoading || isSearchFetching) {
    return <MessageWrapper testID='loader'> Loading ...!</MessageWrapper>;
  }

  if (isError || error || isSearchError || searchError) {
    return (
      <MessageWrapper testID='error-message'>
        {'Content Error, Please try again'}
      </MessageWrapper>
    );
  }

  const sectionHeader = ({ section }) => {
    return (
      <SectionTitleWrapper>
        <SectionTitle>{section?.title}</SectionTitle>
        <MovieList movies={section?.data} />
      </SectionTitleWrapper>
    );
  };

  //Can be used if need to display single item
  // eslint-disable-next-line no-unused-vars
  const _renderItem = ({ item }) => {
    // return <MovieTile movie={item} />;
    // console.log('item ===', item);
    return null;
  };

  return (
    <Container testID='movies'>
      <SearchBar
        onChangeText={onChangeText}
        onClearInput={onClearInput}
        searchPlaceholder='Search'
      ></SearchBar>
      <SectionListWrapper
        sections={dataSource}
        renderSectionHeader={sectionHeader}
        renderItem={_renderItem}
        scrollIndicatorInsets={{ right: 1 }}
      />
    </Container>
  );
};

export default Movies;
