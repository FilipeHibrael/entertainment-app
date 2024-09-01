import getExternalIds from '@/actions/get-external-ids';
import getMediaById from '@/actions/get-media-by-id';
import getMediaCredits from '@/actions/get-media-credits';
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
  const { data: credits } = await getMediaCredits(params.mediaType, id);
  const { data: exteralIds } = await getExternalIds(params.mediaType, id);

  if (!data) return <p>{error}</p>;
  return (
    <main>
      <MediaDetailsContent
        data={data}
        credits={credits}
        exteralIds={exteralIds}
        mediaType={params.mediaType}
      />
    </main>
  );
}
