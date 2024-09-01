import getMediaList from '@/actions/get-media-list';
import MediaList from '@/components/media-list/media-list';
import { MediaListConfig } from '@/types/types';

/* prettier-ignore */
const mediaListsConfig: MediaListConfig[] = [
  { mediaType: 'movie', listType: 'trending', cardStyle: 'banner', contentStyle: 'overflow', header: true, length: 10 },
  { mediaType: 'movie', listType: 'popular', cardStyle: 'normal', contentStyle: 'grid', header: true, length: 8 },
  { mediaType: 'movie', listType: 'now_playing', cardStyle: 'normal', contentStyle: 'grid', header: true, length: 8 },
  { mediaType: 'movie', listType: 'upcoming', cardStyle: 'banner', contentStyle: 'overflow', header: true, length: 10 },
  { mediaType: 'movie', listType: 'top_rated', cardStyle: 'normal', contentStyle: 'grid', header: true, length: 8 },
  { mediaType: 'tv', listType: 'trending', cardStyle: 'banner', contentStyle: 'overflow', header: true, length: 10 },
  { mediaType: 'tv', listType: 'popular', cardStyle: 'normal', contentStyle: 'grid', header: true, length: 8 },
  { mediaType: 'tv', listType: 'airing_today', cardStyle: 'normal', contentStyle: 'grid', header: true, length: 8 },
  { mediaType: 'tv', listType: 'on_the_air', cardStyle: 'banner', contentStyle: 'overflow', header: true, length: 10 },
  { mediaType: 'tv', listType: 'top_rated', cardStyle: 'normal', contentStyle: 'grid', header: true, length: 8 },
];

export default async function Home() {
  const mediaLists = await Promise.all(
    mediaListsConfig.map((mediaList) =>
      getMediaList(mediaList.mediaType, mediaList.listType)
    )
  );

  return (
    <main>
      {mediaLists.map((mediaList, i) => (
        <MediaList
          key={i}
          data={mediaList.data}
          error={mediaList.error}
          {...mediaListsConfig[i]}
        />
      ))}
    </main>
  );
}
