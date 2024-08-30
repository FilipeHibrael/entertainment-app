import { API_IMAGE_PATH } from '@/functions/api';
import { isMovieMediaDetails, MediaDetails } from '@/types/types';
import Image from 'next/image';
import MediaDetailsHeader from './media-details-hader/media-details-hader';

export default function MediaDetailsContent({ data }: { data: MediaDetails }) {
  const posterImageUrl = `${API_IMAGE_PATH}/${data.poster_path}`;

  return (
    <div>
      <div>
        <Image src={posterImageUrl} width={720} height={720} alt="poster" />
      </div>
      <div>
        <MediaDetailsHeader data={data} />
      </div>
    </div>
  );
}
