'use client';
import Image from 'next/image';
import styles from './media-details-poster.module.css';
import React from 'react';

export default function MediaDetailsPoster({ imageUrl }: { imageUrl: string }) {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <div className={styles.wrapper}>
      {isLoading && <div className={styles.skeleton}></div>}
      <Image
        src={imageUrl}
        width={720}
        height={720}
        alt="poster"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
