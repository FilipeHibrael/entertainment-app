import MediaList, { MediaListProps } from '@/components/media-list/media-list';

/* prettier-ignore */
const mediaLists: MediaListProps[] = [
  { mediaType: 'movie', listType: 'trending', cardStyle: 'banner', contentStyle: 'overflow', header: true },
  { mediaType: 'tv', listType: 'trending', cardStyle: 'normal', contentStyle: 'overflow', header: true },
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
