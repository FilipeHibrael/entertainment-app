import getMediaById from '@/actions/get-media-by-id';
import MediaDetailsContent from '@/components/media-details-content/media-details-content';
import { MediaType } from '@/types/types';

type Params = {
  params: {
    mediaType: MediaType;
    id: string;
  };
};

export default async function MediaPage({ params }: Params) {
  const id = Number(params.id);
  const { data, error } = await getMediaById(params.mediaType, id);

  if (!data) return <p>{error}</p>;
  return (
    <main>
      <MediaDetailsContent data={data} />
    </main>
  );
}
