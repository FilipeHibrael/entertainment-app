import getMediaList from '@/actions/get-media-list';
import MediaList from '@/components/media-list/media-list';
import PaginationButton from '@/components/pagination-button/pagination-button';
import { ListType, MediaListConfig, MediaType } from '@/types/types';

type Params = {
  params: {
    mediaType: MediaType;
    listType: ListType;
    pageNumber: String;
  };
};

export default async function MediaListPage({ params }: Params) {
  const page = Number(params.pageNumber);

  const mediaListsConfig: MediaListConfig = {
    mediaType: params.mediaType,
    listType: params.listType,
    header: false,
    cardStyle: 'normal',
    contentStyle: 'grid',
  };

  const mediaLists = await Promise.all([
    getMediaList(params.mediaType, params.listType, page * 2 - 1),
    getMediaList(params.mediaType, params.listType, page * 2),
  ]);

  return (
    <main>
      <h1 style={{ fontWeight: '300', fontSize: '2rem', marginBottom: '2rem' }}>
        {params.listType[0].toUpperCase() +
          params.listType.slice(1).replaceAll('_', ' ') +
          (params.mediaType === 'movie' ? ' movies' : ' tv series')}
      </h1>
      {mediaLists.map((mediaList) => (
        <MediaList
          data={mediaList.data}
          error={mediaList.error}
          {...mediaListsConfig}
        />
      ))}
      <PaginationButton page={page} />
    </main>
  );
}
