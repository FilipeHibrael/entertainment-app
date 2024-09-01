import { API_IMAGE_PATH, IMDB_URL } from '@/functions/api';
import { MediaDetails, MediaType } from '@/types/types';
import Image from 'next/image';
import MediaDetailsHeader from './media-details-hader/media-details-hader';
import styles from './media-details-content.module.css';
import Link from 'next/link';
import IconImdb from '@/icons/icon-imdb';
import IconStar from '@/icons/icon-star';

type MediaDetailsContentProps = {
  data: MediaDetails;
  credits: { cast: { name: string }[] } | null;
  exteralIds: { imdb_id: string } | null;
  mediaType: MediaType;
};

export default function MediaDetailsContent({
  data,
  credits,
  exteralIds,
  mediaType,
}: MediaDetailsContentProps) {
  const posterImageUrl = `${API_IMAGE_PATH}/${data.poster_path}`;

  function formatGenreName(name: String) {
    return name.replace(/&/g, 'and').replace(/\s+/g, '_').toLowerCase();
  }

  return (
    <div className={styles.container}>
      <div className={styles.posterImage}>
        <Image src={posterImageUrl} width={720} height={720} alt="poster" />
      </div>
      <div>
        <MediaDetailsHeader data={data} />
        <div className={styles.rating}>
          <IconStar />
          <div>
            <span className={styles.ratingNumber}>
              {(data.vote_average / 2).toFixed(1)} <span>/ 5</span>
            </span>
            <span className={styles.votes}>( {data.vote_count} )</span>
          </div>
        </div>
        <div className={styles.genres}>
          <h2>Genres</h2>
          <ul>
            {data.genres.map((genre) => (
              <li key={genre.id}>
                <Link
                  href={`/${mediaType}/genre/${formatGenreName(genre.name)}/1`}
                >
                  {genre.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.synopsis}>
          <h2>Synopsis</h2>
          <p>{data.overview}</p>
        </div>
        {credits && (
          <div className={styles.cast}>
            <h2>Cast</h2>
            <ul>
              {credits.cast.map((person) => (
                <li key={person.name}>{person.name}</li>
              ))}
            </ul>
          </div>
        )}
        {exteralIds && (
          <div className={styles.externalLinks}>
            <Link target="_blank" href={`${IMDB_URL}/${exteralIds.imdb_id}`}>
              IMDB <IconImdb />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
