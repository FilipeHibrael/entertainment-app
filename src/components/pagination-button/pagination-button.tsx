'use client';
import IconArrow from '@/icons/icon-arrow';
import { useRouter, usePathname } from 'next/navigation';
import styles from './pagination-button.module.css';

type PaginationButtonProps = {
  page: number;
  totalPages: number;
};

function PaginationButton({ page, totalPages }: PaginationButtonProps) {
  const router = useRouter();
  const pathname = usePathname();

  function handlePrev() {
    if (page > 1) router.push(`${pathname.replace(/\/\d+$/, '')}/${page - 1}`);
  }

  function handleNext() {
    if (page < +(totalPages / 2).toFixed(0))
      router.push(`${pathname.replace(/\/\d+$/, '')}/${page + 1}`);
  }

  return (
    <div className={styles.paginationButton}>
      <button onClick={handlePrev} className={styles.prevButton}>
        <IconArrow /> Prev
      </button>
      <div className={styles.pageLabel}>
        Page {page} of {(totalPages / 2).toFixed(0)}
      </div>
      <button onClick={handleNext} className={styles.nextButton}>
        Next <IconArrow />
      </button>
    </div>
  );
}

export default PaginationButton;
