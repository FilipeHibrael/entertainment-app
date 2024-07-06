import getMediaList from '@/actions/get-media-list';
import MediaList from '@/components/media-list/media-list';

export default async function Home() {
  const { data } = await getMediaList('movie', 'upcoming');

  if (!data) return null;
  return (
    <main>
      <MediaList
        data={data}
        cardStyle="banner"
        contentStyle="overflow"
        header={true}
      />
    </main>
  );
}
