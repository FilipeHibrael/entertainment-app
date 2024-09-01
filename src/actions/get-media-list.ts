'use server';
import { GET_MEDIA_LIST, GET_TRENDING_MEDIA } from '@/functions/api';
import { ListType, MediaListData, MediaType } from '@/types/types';

export default async function getMediaList(
  mediaType: MediaType,
  listType: ListType,
  pageNumber?: number
) {
  try {
    let url;
    if (listType === 'trending')
      url = GET_TRENDING_MEDIA(mediaType, pageNumber || 1).url;
    else url = GET_MEDIA_LIST(mediaType, listType, pageNumber || 1).url;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.API_KEY,
      },
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
