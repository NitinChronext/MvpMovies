import { useQuery } from '@tanstack/react-query';
import { base_url, search_url } from '../../utils/env';

const getData = async () => {
  const data = await fetch(base_url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      contentType: 'application/json',
      Authorization: 'Bearer Wookie2019',
    },
  });

  return await data.json();
};

const searchMovies = async searchTerm => {
  const data = await fetch(search_url + searchTerm, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      contentType: 'application/json',
      Authorization: 'Bearer Wookie2019',
    },
  });

  return await data.json();
};

const flattenMovies = reposneData => {
  return reposneData?.movies?.reduce((accum, currentMovie) => {
    currentMovie['genres'].map(currentKind => {
      if (Object.hasOwn(accum, currentKind)) {
        accum[currentKind].push(currentMovie);
      } else {
        accum = { ...accum, [currentKind]: [currentMovie] };
      }
    });
    return accum;
  }, {});
};

export const useFetchMovies = () => {
  const { data, error, isLoading, isFetching, isError } = useQuery(
    ['movies'],
    () => getData(),
    {
      retry: 3,
      // eslint-disable-next-line no-unused-vars
      onError: async err => {
        //TODO: record error here
      },
      select: flattenMovies,
    },
  );

  return {
    data,
    error,
    isLoading,
    isFetching,
    isError,
  };
};

export const useSearchMovie = searchTerm => {
  const { data, error, isLoading, isFetching, isError } = useQuery(
    ['moviesSearch' + searchTerm],
    () => searchMovies(searchTerm),
    {
      retry: 3,
      // eslint-disable-next-line no-unused-vars
      onError: async err => {
        //TODO: record error here
      },
      select: flattenMovies,
    },
  );

  return {
    data,
    error,
    isLoading,
    isFetching,
    isError,
  };
};
