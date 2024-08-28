'use server';
import { GET_GENRE_LIST } from '@/functions/api';
import { Genre, MediaType } from '@/types/types';

export default async function getGenreList(mediaType: MediaType) {
  try {
    const { url } = GET_GENRE_LIST(mediaType);

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.API_KEY,
      },
    };

    const response = await fetch(url, options);
    if (!response.ok) throw new Error('Unexpected error, try again later.');
    const data = (await response.json()) as { genres: Genre[] };
    return { data, error: '' };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : 'Server error.',
    };
  }
}
