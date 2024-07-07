import { ListType, MediaType } from '@/types/types';
import styles from './media-list.module.css';
import CardBanner from '../media-cards/card-banner';
import MediaListHedaer from './media-list-header';
import getMediaList from '@/actions/get-media-list';

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
        {data.results.map((media) => {
          if (props.cardStyle === 'banner')
            return <CardBanner key={media.id} media={media} />;
        })}
      </ul>
    </section>
  );
}
