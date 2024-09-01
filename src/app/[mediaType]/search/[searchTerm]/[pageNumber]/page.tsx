import getMediaListBySearch from '@/actions/get-media-list-by-search';
import MediaList from '@/components/media-list/media-list';
import PaginationButton from '@/components/pagination-button/pagination-button';
import SearchLabel from '@/components/search-label/search-label';
import { MediaListConfig, MediaType } from '@/types/types';

type Params = {
  params: {
    mediaType: MediaType;
    searchTerm: string;
    pageNumber: String;
  };
};

export default async function Searchpage({ params }: Params) {
  const page = Number(params.pageNumber);
  const mediaListsConfig: MediaListConfig = {
    mediaType: params.mediaType,
    listType: 'genre',
    header: false,
    cardStyle: 'normal',
    contentStyle: 'grid',
  };

  const mediaLists = await Promise.all([
    getMediaListBySearch(params.mediaType, params.searchTerm, page * 2 - 1),
    getMediaListBySearch(params.mediaType, params.searchTerm, page * 2),
  ]);

  return (
    <main>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          marginBottom: '2rem',
        }}
      >
        <SearchLabel />
        <h1 style={{ fontWeight: '300', fontSize: '2rem' }}>
          Found {mediaLists[0].data?.total_results} results for "
          {params.searchTerm.replace('%20', ' ')}"
        </h1>
      </div>
      {mediaLists.map((mediaList, i) => (
        <MediaList
          key={i}
          data={mediaList.data}
          error={mediaList.error}
          {...mediaListsConfig}
        />
      ))}
      <PaginationButton
        page={page}
        totalPages={mediaLists[0].data?.total_pages || 1}
      />
    </main>
  );
}
