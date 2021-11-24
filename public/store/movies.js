import create from 'zustand';

const movies = create((set) => ({
  list: [],
  fetch: async (term = '') => {
    if (!term) {
      set({ list: [] });
      return;
    }

    const response = await fetch(
      `https://www.episodate.com/api/search?q=${term}`,
    );

    const { tv_shows: tvShows = [] } = await response.json();

    set({ list: tvShows });
  },
}));

export default movies;
