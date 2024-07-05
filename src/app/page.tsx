import getTrendingMedia from '@/actions/get-trending-media';
import MediaList from '@/components/media-list/media-list';

export default async function Home() {
  const { data } = await getTrendingMedia('tv');

  if (!data) return null;
  return (
    <main>
      <MediaList
        data={data}
        cardStyle="banner"
        contentStyle="overflow"
        header={false}
      />
    </main>
  );
}
