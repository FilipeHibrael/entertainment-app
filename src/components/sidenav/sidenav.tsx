'use client';
import IconLogo from '@/icons/icon-logo';
import IconNavHome from '@/icons/icon-nav-home';
import IconNavMovies from '@/icons/icon-nav-movies';
import IconNavTvSeries from '@/icons/icon-nav-tv-series';
import Image from 'next/image';
import Link from 'next/link';
import styles from './sidenav.module.css';
import { usePathname } from 'next/navigation';
import React from 'react';
import IconPerson from '@/icons/icon-person';

export default function Sidenav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link href={'/'}>
        <IconLogo />
      </Link>

      <div className={styles.navIcons}>
        <Link href={'/'} className={pathname === '/' ? styles.active : ''}>
          <IconNavHome />
        </Link>
        <Link
          href={'/movie'}
          className={pathname.startsWith('/movie') ? styles.active : ''}
        >
          <IconNavMovies />
        </Link>
        <Link
          href={'/tv'}
          className={pathname.startsWith('/tv') ? styles.active : ''}
        >
          <IconNavTvSeries />
        </Link>
        <Link
          href={'/actors'}
          className={pathname.startsWith('/actors') ? styles.active : ''}
        >
          <IconPerson />
        </Link>
      </div>

      <div className={styles.avatar}>
        <Image
          src={'/images/image-avatar.png'}
          alt="image avatar"
          width={36}
          height={36}
        />
      </div>
    </nav>
  );
}
