'use server';
import { GET_MEDIA_LIST, GET_TRENDING_MEDIA } from '@/functions/api';
import { ListType, MediaListType, MediaType } from '@/types/types';

export default async function getMediaList(
  mediaType: MediaType,
  listType: ListType
) {
  try {
    let url;
    if (listType === 'trending') url = GET_TRENDING_MEDIA(mediaType).url;
    else url = GET_MEDIA_LIST(mediaType, listType).url;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.API_KEY,
      },
    };

    const response = await fetch(url, options);
    if (!response.ok) throw new Error('Unexpected error, try again later.');
    const data = (await response.json()) as MediaListType;
    Object.defineProperties(data, {
      mediaType: { value: mediaType },
      listType: { value: listType },
    });

    return { data, error: '' };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : 'Server error.',
    };
  }
}
