import { ListType, MediaType } from '@/types/types';
import styles from './media-list.module.css';
import CardBanner from '../media-cards/card-banner';
import MediaListHedaer from './media-list-header';
import getMediaList from '@/actions/get-media-list';
import CardNormal from '../media-cards/card-normal';

export type MediaListProps = {
  mediaType: MediaType;
  listType: ListType;
  header: boolean;
  contentStyle: 'grid' | 'overflow';
  cardStyle: 'normal' | 'banner';
  length?: number;
};

export default async function MediaList(props: MediaListProps) {
  const { data, error } = await getMediaList(props.mediaType, props.listType);

  if (!data) return <p>{error}</p>;
  return (
    <section className={styles.container}>
      {props.header && (
        <MediaListHedaer
          listType={props.listType}
          mediaType={props.mediaType}
        />
      )}
      <ul className={`${styles.content} ${props.contentStyle}`}>
        {data.results.slice(0, props.length || data.results.length).map((media) => {
          if (props.cardStyle === 'banner')
            return <CardBanner key={media.id} media={media} />;
          else if (props.cardStyle === 'normal')
            return <CardNormal key={media.id} media={media} />;
        })}
      </ul>
    </section>
  );
}
