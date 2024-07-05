import styles from './card-banner.module.css';
import { API_IMAGE_PATH } from '@/functions/api';
import Link from 'next/link';
import { Media, isMovieMedia, isTvMedia } from '@/types/types';
import MovieCardText from './cards-text/movie-card-text';
import TvCardText from './cards-text/tv-card-text';

export default function CardBanner({ media }: { media: Media }) {
  const urlImage = API_IMAGE_PATH + media.backdrop_path;

  return (
    <li className={styles.card} style={{ backgroundImage: `url(${urlImage})` }}>
      <Link href={'/'}>
        {isMovieMedia(media) && (
          <MovieCardText title={media.title} releaseDate={media.release_date} />
        )}
        {isTvMedia(media) && (
          <TvCardText name={media.name} firstAirDate={media.first_air_date} />
        )}
      </Link>
    </li>
  );
}
