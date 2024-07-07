import { API_IMAGE_PATH } from '@/functions/api';
import { Media, isMovieMedia, isTvMedia } from '@/types/types';
import Image from 'next/image';
import styles from './card-normal.module.css';
import Link from 'next/link';
import MovieCardText from './cards-text/movie-card-text';
import TvCardText from './cards-text/tv-card-text';

export default function CardNormal({ media }: { media: Media }) {
  const urlImage = API_IMAGE_PATH + media.backdrop_path;

  return (
    <li className={styles.card}>
      <Link href={'/'}>
        <div className={styles.image}>
          <Image alt="media image" src={urlImage} width={1080} height={720} />
        </div>
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
