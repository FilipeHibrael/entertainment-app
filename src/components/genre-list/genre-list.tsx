import getGenreList from '@/actions/get-genre-list';
import { MediaType } from '@/types/types';
import Link from 'next/link';

type GenreListProps = {
  mediaType: MediaType;
};

export default async function GenreList({ mediaType }: GenreListProps) {
  const { data, error } = await getGenreList(mediaType);

  if (!data?.genres) return <p>{error}</p>;
  return (
    <ul>
      {data.genres.map((genre) => (
        <li key={genre.id}>
          <Link href={''}>{genre.name}</Link>
        </li>
      ))}
    </ul>
  );
}
