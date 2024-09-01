import { MediaListConfig, MediaListData } from '@/types/types';
import styles from './media-list.module.css';
import CardBanner from '../media-cards/card-banner';
import MediaListHedaer from './media-list-header';
import CardNormal from '../media-cards/card-normal';

type MediaListProps = MediaListConfig & {
  data: MediaListData | null;
  error: string;
};

export default async function MediaList({
  data,
  error,
  mediaType,
  listType,
  header,
  contentStyle,
  cardStyle,
  length,
}: MediaListProps) {
  if (!data) return <p>{error}</p>;
  return (
    <section className={styles.container}>
      {header && listType && (
        <MediaListHedaer listType={listType} mediaType={mediaType} />
      )}
      <ul className={`${styles.content} ${contentStyle}`}>
        {data.results.slice(0, length || data.results.length).map((media) => {
          if (cardStyle === 'banner')
            return (
              <CardBanner key={media.id} media={media} mediaType={mediaType} />
            );
          else if (cardStyle === 'normal')
            return (
              <CardNormal key={media.id} media={media} mediaType={mediaType} />
            );
        })}
      </ul>
    </section>
  );
}
