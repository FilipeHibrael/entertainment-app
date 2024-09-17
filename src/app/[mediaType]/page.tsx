import getMediaList from '@/actions/get-media-list';
import GenreList from '@/components/genre-list/genre-list';
import MediaList from '@/components/media-list/media-list';
import { MediaListConfig, MediaType } from '@/types/types';
import { Metadata } from 'next';

type Params = {
  params: {
    mediaType: MediaType;
  };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const mediaType = params.mediaType;
  const title = mediaType === 'tv' ? 'Tv Series' : 'Movies';
  return {
    title: `${title} | Entertainment App`,
  };
}

export default async function MediaTypePage({ params }: Params) {
  const mediaListConfig: MediaListConfig = {
    mediaType: params.mediaType,
    listType: 'trending',
    header: false,
    cardStyle: 'banner',
    contentStyle: 'overflow',
    length: 12,
  };

  const { data, error } = await getMediaList(params.mediaType, 'trending');

  return (
    <main>
      <MediaList data={data} error={error} {...mediaListConfig} />
      <GenreList mediaType={params.mediaType} />
    </main>
  );
}
