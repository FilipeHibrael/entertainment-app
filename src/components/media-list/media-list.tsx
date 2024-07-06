import { MediaListType } from '@/types/types';
import styles from './media-list.module.css';
import CardBanner from '../media-cards/card-banner';
import MediaListHedaer from './media-list-header';

type PropsType = {
  header: boolean;
  contentStyle: 'grid' | 'overflow';
  cardStyle: 'normal' | 'banner';
  length?: number;
  data: MediaListType;
};

export default function MediaList({
  header,
  contentStyle,
  cardStyle,
  length,
  data,
}: PropsType) {
  return (
    <section className={styles.container}>
      {header && (
        <MediaListHedaer listType={data.listType} mediaType={data.mediaType} />
      )}
      <ul className={`${styles.content} ${contentStyle}`}>
        {data.results.map((media) => {
          if (cardStyle === 'banner')
            return <CardBanner key={media.id} media={media} />;
        })}
      </ul>
    </section>
  );
}
