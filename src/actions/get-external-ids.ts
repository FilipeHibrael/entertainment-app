'use server';
import { GET_EXTERNAL_IDS } from '@/functions/api';
import { MediaType } from '@/types/types';

export default async function getExternalIds(
  mediaType: MediaType,
  id: number
) {
  try {
    const url = GET_EXTERNAL_IDS(mediaType, id).url;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.API_KEY,
      },
    };

    const response = await fetch(url, options);
    if (!response.ok) throw new Error('Unexpected error, try again later.');
    const data = (await response.json()) as { imdb_id: string };

    return { data, error: '' };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : 'Server error.',
    };
  }
}
