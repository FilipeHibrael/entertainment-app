import MediaList, { MediaListProps } from '@/components/media-list/media-list';

/* prettier-ignore */
const mediaLists: MediaListProps[] = [
  { mediaType: 'movie', listType: 'trending', cardStyle: 'banner', contentStyle: 'overflow', header: true, length: 10 },
  { mediaType: 'tv', listType: 'trending', cardStyle: 'normal', contentStyle: 'grid', header: true, length: 8 },
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
