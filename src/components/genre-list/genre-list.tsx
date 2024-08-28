import getGenreList from '@/actions/get-genre-list';
import { MediaType } from '@/types/types';
import Link from 'next/link';
import styles from './genre-list.module.css';

type GenreListProps = {
  mediaType: MediaType;
};

export default async function GenreList({ mediaType }: GenreListProps) {
  const { data, error } = await getGenreList(mediaType);

  function formatGenreName(name: String) {
    return name.replace(/&/g, 'and').replace(/\s+/g, '-').toLowerCase();
  }

  if (!data?.genres) return <p>{error}</p>;
  return (
    <ul className={`${styles.genreList} ${styles[mediaType]}`}>
      {data.genres.map((genre) => (
        <li key={genre.id} className={styles.genreLink}>
          <Link href={`/${mediaType}/genre/${formatGenreName(genre.name)}`}>
            {genre.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
