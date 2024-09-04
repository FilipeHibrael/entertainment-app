import { API_IMAGE_PATH } from '@/functions/api';
import { Actor } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import styles from './actors-list.module.css';

type ActorsListProps = {
  data: { results: Actor[] } | null;
  error: string;
};

export default function ActorsList({ data, error }: ActorsListProps) {
  console.log(data);

  if (!data) return <p>{error}</p>;
  return (
    <ul className={styles.actorsList}>
      {data.results.slice(0, 18).map((actor) => (
        <li className={styles.actorCard}>
          <Link href={''}>
            <div className={styles.actorImage}>
              <Image
                alt={actor.name}
                src={API_IMAGE_PATH + actor.profile_path}
                width={196}
                height={294}
              />
            </div>
            <p className={styles.actorName}>{actor.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
