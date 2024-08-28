import IconLogo from '@/icons/icon-logo';
import IconNavHome from '@/icons/icon-nav-home';
import IconNavMovies from '@/icons/icon-nav-movies';
import IconNavTvSeries from '@/icons/icon-nav-tv-series';
import Image from 'next/image';
import Link from 'next/link';
import styles from './sidenav.module.css';

export default function Sidenav() {
  return (
    <nav className={styles.nav}>
      <Link href={'/'}>
        <IconLogo />
      </Link>

      <div className={styles.navIcons}>
        <Link href={'/'}>
          <IconNavHome />
        </Link>
        <Link href={'/movie'}>
          <IconNavMovies />
        </Link>
        <Link href={'/tv'}>
          <IconNavTvSeries />
        </Link>
      </div>

      <div className={styles.avatar}>
        <Image
          src={'/images/image-avatar.png'}
          alt="iamge avatar"
          width={36}
          height={36}
        />
      </div>
    </nav>
  );
}
