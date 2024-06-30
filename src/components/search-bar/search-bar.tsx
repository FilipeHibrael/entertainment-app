'use client';
import IconSearch from '@/icons/icon-search';
import { useFormStatus } from 'react-dom';
import styles from './search-bar.module.css';

function FormButton() {
  const { pending } = useFormStatus();
  return <button disabled={pending}>Search</button>;
}

export default function SearchBar() {
  return (
    <form action="" className={styles.form}>
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
      <FormButton />
    </form>
  );
}
