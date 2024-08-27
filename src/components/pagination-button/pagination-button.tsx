'use client';
import IconArrow from '@/icons/icon-arrow';
import { useRouter, usePathname } from 'next/navigation';
import styles from './pagination-button.module.css';

function PaginationButton({ page }: { page: number }) {
  const router = useRouter();
  const pathname = usePathname();

  function handlePrev() {
    if (page > 1) router.push(`${pathname.replace(/\/\d+$/, '')}/${page - 1}`);
    else return;
  }

  function handleNext() {
    router.push(`${pathname.replace(/\/\d+$/, '')}/${page + 1}`);
  }

  return (
    <div className={styles.paginationButton}>
      <button onClick={handlePrev} className={styles.prevButton}>
        <IconArrow /> Prev
      </button>
      <div className={styles.pageLabel}>Page {page}</div>
      <button onClick={handleNext} className={styles.nextButton}>
        Next <IconArrow />
      </button>
    </div>
  );
}

export default PaginationButton;
