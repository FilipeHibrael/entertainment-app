'use client';
import IconSearch from '@/icons/icon-search';
import styles from './search-bar.module.css';
import React, { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const searchTerm = data.get('media')?.toString();

    if (searchTerm?.trim() !== '') {
      router.push(`/movie/search/${searchTerm}/1`);
      event.currentTarget.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="media">
        <span hidden>Search for movies or TV series</span>
        <span className={styles.iconSearch}>
          <IconSearch />
        </span>
      </label>
      <input
        name="media"
        id="media"
        type="text"
        placeholder="Search for movies or TV series"
      />
      <button type="submit">Search</button>
    </form>
  );
}
