import { MediaType } from '@/types/types';
import styles from './media-list.module.css';
import CardBanner from '../media-cards/card-banner';
import CardNormal from '../media-cards/card-normal';
import getMediaListByGenre from '@/actions/get-media-list-by-genre';

export type MediaListByGenreProps = {
  mediaType: MediaType;
  contentStyle: 'grid' | 'overflow';
  cardStyle: 'normal' | 'banner';
  genreId: number;
  length?: number;
  pageNumber?: number;
};

export default async function MediaListByGenre(props: MediaListByGenreProps) {
  const { data, error } = await getMediaListByGenre(
    props.mediaType,
    props.genreId,
    props.pageNumber
  );

  if (!data) return <p>{error}</p>;
  return (
    <section className={styles.container}>
      <ul className={`${styles.content} ${props.contentStyle}`}>
        {data.results
          .slice(0, props.length || data.results.length)
          .map((media) => {
            if (props.cardStyle === 'banner')
              return <CardBanner key={media.id} media={media} />;
            else if (props.cardStyle === 'normal')
              return <CardNormal key={media.id} media={media} />;
          })}
      </ul>
    </section>
  );
}
