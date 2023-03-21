import { Metadata } from 'next';
import Link from 'next/link';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: '멋진 제품 사이트 | 전체 제품 확인',
  description: '멋진 제품을 확인해보세요.',
};

export default function ProductdLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.navbar}>
        <Link href='/products/woman'>여성옷</Link>
        <Link href='/products/man '>남성옷</Link>
      </nav>
      <section className={styles.products}>
        {/* Include shared UI here e.g. a header or sidebar */}

        {children}
      </section>
    </>
  );
}
