import GenreList from '@/components/genre-list/genre-list';
import MediaList, { MediaListProps } from '@/components/media-list/media-list';
import { MediaType } from '@/types/types';

type Params = {
  params: {
    mediaType: MediaType;
  };
};

export default function MediaTypePage({ params }: Params) {
  const mediaListProps: MediaListProps = {
    mediaType: params.mediaType,
    listType: 'trending',
    header: false,
    cardStyle: 'banner',
    contentStyle: 'overflow',
    length: 12,
  };

  return (
    <main>
      <MediaList {...mediaListProps} />
      <GenreList mediaType={params.mediaType} />
    </main>
  );
}
