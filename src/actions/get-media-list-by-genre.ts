'use server';
import { GET_MEDIA_LIST_BY_GENRE } from '@/functions/api';
import { MediaListData, MediaType } from '@/types/types';

export default async function getMediaListByGenre(
  mediaType: MediaType,
  genreId: number,
  pageNumber?: number
) {
  try {
    const url = GET_MEDIA_LIST_BY_GENRE(
      mediaType,
      genreId,
      pageNumber || 1
    ).url;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.API_KEY,
      },
      next: { revalidate: 300 },
    };

    const response = await fetch(url, options);
    if (!response.ok) throw new Error('Unexpected error, try again later.');
    const data = (await response.json()) as MediaListData;

    return { data, error: '' };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : 'Server error.',
    };
  }
}
