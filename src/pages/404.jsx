import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <div>
        <h1>There is nothing here yet</h1>
      </div>

      <div>
        <Image
          src="/404.jpeg"
          alt="Picture of the author"
          width={360}
          height={360}
        />
      </div>

      <div>
        <button type="button" onClick={() => router.push('/')}>
          Return Home
        </button>
      </div>
    </>
  );
}
