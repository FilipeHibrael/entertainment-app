import MediaList, { MediaListProps } from '@/components/media-list/media-list';

/* prettier-ignore */
const mediaLists: MediaListProps[] = [
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

export default function Home() {
  return (
    <main>
      {mediaLists.map((config, i) => (
        <MediaList key={i} {...config} />
      ))}
    </main>
  );
}
