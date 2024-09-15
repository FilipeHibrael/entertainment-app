'use client';
import { API_IMAGE_PATH } from '@/functions/api';
import { Media, MediaType, isMovieMedia, isTvMedia } from '@/types/types';
import Image from 'next/image';
import styles from './card-normal.module.css';
import Link from 'next/link';
import MovieCardText from './cards-text/movie-card-text';
import TvCardText from './cards-text/tv-card-text';
import React from 'react';

type CardNormalProps = {
  media: Media;
  mediaType: MediaType;
};

export default function CardNormal({ media, mediaType }: CardNormalProps) {
  const [urlImage, setUrlImage] = React.useState(
    API_IMAGE_PATH + media.backdrop_path
  );

  return (
    <li className={styles.card}>
      <Link href={`/${mediaType}/id/${media.id}`}>
        <div className={styles.image}>
          <Image
            alt="media image"
            src={urlImage}
            width={480}
            height={720}
            onError={() => setUrlImage('/images/default-image.svg')}
          />
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
