const URL = {
  baseApiUrl: () => 'http://localhost:5000',
  user: {},
  movies: {
    getCategories: (page: string, limit: string) =>
      `/categories?page=${page}&limit=${limit}`,
    loadMoviesByCategories: (
      categoryKey: string,
      page: string,
      limit: string,
    ) => `/load-movies-by-category/${categoryKey}?page=${page}&limit=${limit}`,
    getMovieById: (categoryKey: string, movieId: string) =>
      `/movie/${categoryKey}/${movieId}`,
  },
}

export default URL
