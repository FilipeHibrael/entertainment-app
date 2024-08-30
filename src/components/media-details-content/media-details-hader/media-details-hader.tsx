import {
  isMovieMediaDetails,
  isTvMediaDetails,
  MediaDetails,
} from '@/types/types';

export default function MediaDetailsHeader({ data }: { data: MediaDetails }) {
  return (
    <div>
      {isMovieMediaDetails(data) && data.title}
      {isTvMediaDetails(data) && data.name}
    </div>
  );
}
