import create from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  favMovies: [],
};

export const useMovieStore = create(
  persist(
    (set, get) => ({
      ...initialState,
      markAsFavorite: movie => {
        const favMovies = get().favMovies;
        const newFavMovies = [...favMovies, movie];
        set({ favMovies: newFavMovies });
      },
      unmarkAsFavorite: movie => {
        const favMovies = get().favMovies;
        const newFavMovies = favMovies.filter(m => m.id !== movie.id);
        set({ favMovies: newFavMovies });
      },
    }),
    { name: 'movies', getStorage: () => AsyncStorage },
  ),
);
