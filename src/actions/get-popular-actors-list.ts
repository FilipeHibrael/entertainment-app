'use server';
import { GET_POPULAR_ACTORS_LIST } from '@/functions/api';
import { Actor } from '@/types/types';

export default async function getPopularActorsList(pageNumber?: number) {
  try {
    const url = GET_POPULAR_ACTORS_LIST(pageNumber || 1).url;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.API_KEY,
      },
    };

    const response = await fetch(url, options);
    if (!response.ok) throw new Error('Unexpected error, try again later.');
    const data = (await response.json()) as { results: Actor[] };

    return { data, error: '' };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : 'Server error.',
    };
  }
}
