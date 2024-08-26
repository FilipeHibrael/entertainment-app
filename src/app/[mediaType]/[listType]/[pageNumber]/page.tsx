import MediaList, { MediaListProps } from '@/components/media-list/media-list';
import { ListType, MediaType } from '@/types/types';

type Params = {
  params: {
    mediaType: MediaType;
    listType: ListType;
    pageNumber: number;
  };
};

export default async function MediaListPage({ params }: Params) {
  const mediaList: MediaListProps = {
    mediaType: params.mediaType,
    listType: params.listType,
    header: false,
    cardStyle: 'normal',
    contentStyle: 'grid',
    pageNumber: params.pageNumber,
  };

  return (
    <main>
      <h1 style={{ fontWeight: '300', fontSize: '2rem', marginBottom: '2rem' }}>
        {params.listType[0].toUpperCase() +
          params.listType.slice(1).replaceAll('_', ' ') +
          (params.mediaType === 'movie' ? ' movies' : ' tv series')}
      </h1>
      <MediaList {...mediaList} />
    </main>
  );
}
