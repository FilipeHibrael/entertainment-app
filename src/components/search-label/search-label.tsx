'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './search-label.module.css';

export default function SearchLabel() {
  const pathname = usePathname();

  const movieSearchPath = pathname.replace('/tv/search', '/movie/search');
  const tvSearchPath = pathname.replace('/movie/search', '/tv/search');

  return (
    <div className={styles.label}>
      <Link
        href={movieSearchPath}
        className={pathname.startsWith('/movie') ? styles.active : ''}
      >
        Movies
      </Link>
      <Link
        href={tvSearchPath}
        className={pathname.startsWith('/tv') ? styles.active : ''}
      >
        TV Series
      </Link>
    </div>
  );
}
