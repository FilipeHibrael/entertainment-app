import Link from 'next/link';
import styles from './media-list-header.module.css';

export default function MediaListHedaer({
  mediaType,
  listType,
}: {
  mediaType: string;
  listType: string;
}) {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>
        {listType[0].toLocaleUpperCase() +
          listType.slice(1).replaceAll('_', ' ')}
      </h2>
      <span className={`${styles.label} ${mediaType}`}>
        {mediaType === 'tv' ? 'tv series' : 'movies'}
      </span>
      <Link className={styles.link} href={`/${mediaType}/${listType}/1`}>
        see more
      </Link>
    </div>
  );
}
