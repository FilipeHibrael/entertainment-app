import {
  isMovieMediaDetails,
  isTvMediaDetails,
  MediaDetails,
} from '@/types/types';
import styles from './media-details-hader.module.css';

export default function MediaDetailsHeader({ data }: { data: MediaDetails }) {
  return (
    <>
      {isMovieMediaDetails(data) && (
        <div>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.tagline}>{data.tagline}</p>
          <ul className={styles.details}>
            <li>
              <h2>Length</h2>
              <p>{data.runtime} min</p>
            </li>
            <li>
              <h2>Language</h2>
              <p>{data.spoken_languages[0].english_name}</p>
            </li>
            <li>
              <h2>Year</h2>
              <p>{data.release_date.split('-')[0]}</p>
            </li>
            <li>
              <h2>Status</h2>
              <p>{data.status}</p>
            </li>
          </ul>
        </div>
      )}
      {isTvMediaDetails(data) && (
        <div>
          <h1 className={styles.title}>{data.name}</h1>
          <p className={styles.tagline}>{data.tagline}</p>
          <ul className={styles.details}>
            <li>
              <h2>First air date</h2>
              <p>{data.first_air_date.replaceAll('-', '/')}</p>
            </li>
            <li>
              <h2>Last air date</h2>
              <p>{data.last_air_date.replaceAll('-', '/')}</p>
            </li>
            <li>
              <h2>Language</h2>
              <p>{data.spoken_languages[0].english_name}</p>
            </li>
            <li>
              <h2>Status</h2>
              <p>{data.status}</p>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
