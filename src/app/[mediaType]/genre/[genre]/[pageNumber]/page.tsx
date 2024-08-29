import getGenreList from '@/actions/get-genre-list';
import MediaListByGenre, {
  MediaListByGenreProps,
} from '@/components/media-list/media-list-by-genre';
import PaginationButton from '@/components/pagination-button/pagination-button';
import { MediaType } from '@/types/types';
import React from 'react';

type Params = {
  params: {
    mediaType: MediaType;
    genre: String;
    pageNumber: String;
  };
};

export default async function Genrepage({ params }: Params) {
  const page = Number(params.pageNumber);
  const genreName = params.genre
    .replace(/_/g, ' ')
    .replace(/\band\b/g, '&')
    .replace(/\b\w/g, (char) => char.toUpperCase());

  const { data, error } = await getGenreList(params.mediaType);
  const genreId = data?.genres.find((genre) => genre.name === genreName)?.id;

  const mediaListProps: MediaListByGenreProps = {
    cardStyle: 'normal',
    contentStyle: 'grid',
    genreId: genreId ? genreId : 0,
    mediaType: params.mediaType,
  };

  if (!genreId) return error ? <p>{error}</p> : null;
  return (
    <main>
      <MediaListByGenre {...mediaListProps} pageNumber={page * 2 - 1} />
      <MediaListByGenre {...mediaListProps} pageNumber={page * 2} />
      <PaginationButton page={Number(params.pageNumber)} />
    </main>
  );
}
