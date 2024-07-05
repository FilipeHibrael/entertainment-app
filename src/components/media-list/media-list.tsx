import { TrendingMedia } from '@/types/types';
import styles from './media-list.module.css';
import CardBanner from '../media-cards/card-banner';

type PropsType = {
  header: boolean;
  contentStyle: 'grid' | 'overflow';
  cardStyle: 'normal' | 'banner';
  length?: number;
  data: TrendingMedia;
};

export default function MediaList({
  header,
  contentStyle,
  cardStyle,
  length,
  data,
}: PropsType) {
  return (
    <section>
      {cardStyle === 'banner' && (
        <ul className={`${styles.content} ${contentStyle}`}>
          {data.results.map((media) => {
            if (cardStyle === 'banner')
              return <CardBanner key={media.id} media={media} />;
          })}
        </ul>
      )}
    </section>
  );
}
