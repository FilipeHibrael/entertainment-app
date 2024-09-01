import getGenreList from '@/actions/get-genre-list';
import getMediaListByGenre from '@/actions/get-media-list-by-genre';
import MediaList from '@/components/media-list/media-list';
import PaginationButton from '@/components/pagination-button/pagination-button';
import { MediaListConfig, MediaType } from '@/types/types';
import React from 'react';

type Params = {
  params: {
    mediaType: MediaType;
    genre: String;
    pageNumber: String;
  };
};

export default async function GenrePage({ params }: Params) {
  const page = Number(params.pageNumber);
  const genreName = params.genre
    .replace(/_/g, ' ')
    .replace(/\band\b/g, '&')
    .replace(/\b\w/g, (char) => char.toUpperCase());

  const { data } = await getGenreList(params.mediaType);
  const genreId =
    data?.genres.find((genre) => genre.name === genreName)?.id || 1;

  const mediaListsConfig: MediaListConfig = {
    cardStyle: 'normal',
    contentStyle: 'grid',
    mediaType: params.mediaType,
    listType: 'genre',
    header: false,
  };

  const mediaLists = await Promise.all([
    getMediaListByGenre(params.mediaType, genreId, page * 2 - 1),
    getMediaListByGenre(params.mediaType, genreId, page * 2),
  ]);

  return (
    <main>
      {mediaLists.map((mediaList) => (
        <MediaList
          data={mediaList.data}
          error={mediaList.error}
          {...mediaListsConfig}
        />
      ))}
      <PaginationButton
        page={Number(params.pageNumber)}
        totalPages={mediaLists[0].data?.total_pages || 1}
      />
    </main>
  );
}
